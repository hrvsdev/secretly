import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { deleteSecret, getSecret } from "../../firebase/db";

import { BiCopy } from "react-icons/bi";

import ViewButton from "../button";
import Hero from "../hero";
import Navbar from "../navbar";

export default function Link(): JSX.Element {
  // Router hook
  const router = useRouter();

  // Link from URL parameter
  const link = router.query.link;

  // Show secret state
  const isSecretShown = useState(false);

  // Secret text value state
  const secret = useState("");

  // Copied text state
  const isCopied = useState(false);

  // Show secret function
  const onShowSecret = () => {
    isSecretShown.set(true);
    if (typeof link === "string") deleteSecret(link);
  };

  // Copy button action
  const onCopy = () => {
    window.navigator.clipboard.writeText(secret.value);
    isCopied.set(true);
    setTimeout(() => isCopied.set(false), 2000);
  };

  // Getting secret on page load
  useEffect(() => {
    if (router.isReady && typeof link === "string") {
      const promise = getSecret(link);
      promise.then((res) => {
        if (res.success) {
          if (res.data) secret.set(res.data.secret);
          else secret.set("Secret is expired or link is invalid");
        }
      });
    }
  }, [link]); // eslint-disable-line react-hooks/exhaustive-deps

  const heroProps = {
    heading: "Here is a secret",
    para: "Click the button below to view the secret. Copy it as it will be deleted instantly.",
  };

  return (
    <Main>
      <Hero {...heroProps} />
      <ViewButtonWrapper show={isSecretShown.value}>
        <ViewButton onClick={onShowSecret}>View Secret</ViewButton>
      </ViewButtonWrapper>
      <SecretWrapper show={isSecretShown.value}>
        <Secret>{secret.value}</Secret>
        <ButtonsWrapper>
          <CopyButton onClick={onCopy}>
            <BiCopy />
            {isCopied.value ? "Copied" : "Copy"}
          </CopyButton>
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

const CopyButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: #0073ff;
  color: white;
  border-radius: 10px;
  will-change: transform filter;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    transform: scale(0.96);
  }

  svg{
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;
