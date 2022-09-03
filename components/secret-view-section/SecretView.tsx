import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { useRouter } from "next/router";

import ViewButton from "../button";
import CopyButton from "../copy-button";
import Hero from "../hero";
import SecButton from "../sec-button";
import Error from "./error";

import { deleteSecret, getSecret } from "../../firebase/db";
import { getHash, decrypt } from "../../utils/utils";

import type { SecretDataTypes } from "../../firebase/types";
import Password from "./password";

export default function Link(): JSX.Element {
  // Router hook
  const router = useRouter();

  // Link from URL parameter
  const link = router.query.link as string;

  // Secret text value state
  const secret = useState("");

  // Password value state
  const password = useState("");

  // Show view button state
  const isViewButtonShown = useState(false)

  // Show secret state
  const isSecretShown = useState(false);

  // Show password input state
  const isPasswordInputShown = useState(true);

  // Error state
  const isError = useState(false);

  // Loading state
  const isLoading = useState(false);

  // View secret button action
  const onShowSecret = async () => {
    await getSecretFromDB();
    deleteSecret(link);
  };

  // Getting secret from DB
  const getSecretFromDB = async () => {
    isLoading.set(true);
    const res = await getSecret(link);
    const data = res.data;
    if (data) {
      const decrypted: SecretDataTypes = decrypt(data.data, getHash());
      if (decrypted) {
        if (decrypted.type === "text") secret.set(decrypted.secret), isSecretShown.set(true);
        else if (decrypted.type === "redirect") router.push(decrypted.secret);
        isLoading.set(false);
      } else {
        isError.set(true);
      }
    } else {
      isError.set(true);
    }
  };

  // Reply button action
  const onReply = () => {
    router.push("/");
  };

  const heroProps = {
    heading: "Here is a secret",
    para: "Click the button below to view the secret. Copy it as it will be deleted instantly.",
  };

  return (
    <Main>
      <Hero {...heroProps} />
      <ViewButtonWrapper show={isSecretShown.value}>
        <ViewButton onClick={onShowSecret} isLoading={isLoading.value}>
          View Secret
        </ViewButton>
      </ViewButtonWrapper>
      <Error show={isError.value} />
      <Password show={isPasswordInputShown.value} />
      <SecretWrapper show={isSecretShown.value}>
        <Secret>{secret.value}</Secret>
        <ButtonsWrapper>
          <SecButton onClick={onReply}>Reply with a secret</SecButton>
          <CopyButton text={secret.value} />
        </ButtonsWrapper>
      </SecretWrapper>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
`;

const ViewButtonWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  padding: 0 20px;
`;

const SecretWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  max-width: 800px;
  margin: auto;
  transition: all 200ms;
  transition-delay: 100ms;
`;

const Secret = styled.div`
  border-radius: 10px;
  min-height: 100px;
  width: 100%;
  padding: 20px;
  background: hsla(0, 0%, 0%, 0.3);
  color: white;
  word-break: break-all;
  margin-bottom: 15px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 15px;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    row-gap: 15px;
  }
`;
