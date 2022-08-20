import styled from "@emotion/styled";

import { useState } from "@hookstate/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { getSecret } from "../../firebase/db";

export default function Link(): JSX.Element {
  // Router hook
  const router = useRouter();

  // Link from URL parameter
  const link = router.query.link;

  // Show secret state
  const isSecretShown = useState(false);

  // Show secret function
  const onShowSecret = () => isSecretShown.set(true);

  // Getting secret on page load
  useEffect(() => {
    if (router.isReady) getSecret(link);
  }, [link]);

  return (
    <LinkWrapper>
      {isSecretShown.value ? (
        <SecretText>{link}</SecretText>
      ) : (
        <ShowButton onClick={onShowSecret}>Show Secret</ShowButton>
      )}
    </LinkWrapper>
  );
}

const LinkWrapper = styled.div``;

const SecretText = styled.p``;

const ShowButton = styled.button``;
