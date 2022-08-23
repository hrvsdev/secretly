import styled from "@emotion/styled";

import { useState } from "@hookstate/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { deleteSecret, getSecret } from "../../firebase/db";
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
    para: "Click the button below to view the secret. Copy it as it will be deleted instantly.",
  };

  return (
    <Main>
      <Hero {...heroProps} />
      <ButtonWrapper>
        <ViewButton>View Secret</ViewButton>
      </ButtonWrapper>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
`;

const SecretText = styled.p``;

const ShowButton = styled.button``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`