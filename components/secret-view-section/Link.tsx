import styled from "@emotion/styled";

import { useState } from "@hookstate/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { deleteSecret, getSecret } from "../../firebase/db";
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

  // Show secret function
  const onShowSecret = () => {
    isSecretShown.set(true);
    if (typeof link === "string") deleteSecret(link);
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
    para: "Click the button below to view the secret. Make sure that you copied the sceret.",
  };

  return (
    <SecretViewWrapper>
      <Hero {...heroProps} />
      {isSecretShown.value ? (
        <SecretText>{secret.value}</SecretText>
      ) : (
        <ShowButton onClick={onShowSecret}>Show Secret</ShowButton>
      )}
    </SecretViewWrapper>
  );
}

const SecretViewWrapper = styled.div`
  min-height: 100vh;
`;

const SecretText = styled.p``;

const ShowButton = styled.button``;
