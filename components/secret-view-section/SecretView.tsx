import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { useRouter } from "next/router";

import { deleteSecret, getSecret } from "../../firebase/db";
import { getHash, decrypt } from "../../utils/utils";

import ViewButton from "../button";
import CopyButton from "../copy-button";
import Hero from "../hero";
import Error from "./error";

export default function Link(): JSX.Element {
  // Router hook
  const router = useRouter();

  // Link from URL parameter
  const link = router.query.link;

  // Show secret state
  const isSecretShown = useState(false);

  // Error state
  const isError = useState(false);

  // Secret text value state
  const secret = useState("");

  // Loading state
  const isLoading = useState(false);

  // View secret button action
  const onShowSecret = async () => {
    await getSecretFromDB();
    if (typeof link === "string") deleteSecret(link);
  };

  // Getting secret from DB
  const getSecretFromDB = async () => {
    if (typeof link === "string") {
      isLoading.set(true);
      const res = await getSecret(link);
      if (res.success) {
        isLoading.set(false);
        if (res.data) {
          secret.set(decrypt(res.data.secret, getHash()));
          isSecretShown.set(true);
        } else {
          isError.set(true);
        }
      }
    }
  };

  const heroProps = {
    heading: "Here is a secret",
    para: "Click the button below to view the secret. Copy it as it will be deleted instantly.",
  };

  return (
    <Main>
      <Hero {...heroProps} />
      <ViewButtonWrapper show={isSecretShown.value || isError.value}>
        <ViewButton onClick={onShowSecret} isLoading={isLoading.value}>
          View Secret
        </ViewButton>
      </ViewButtonWrapper>
      <Error show={isError.value} />
      <SecretWrapper show={isSecretShown.value}>
        <Secret>{secret.value}</Secret>
        <ButtonsWrapper>
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
  display: ${({ show }) => (show ? "none" : "flex")};
  justify-content: center;
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
  margin-bottom: 15px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
