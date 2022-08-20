import styled from "@emotion/styled";

import { useState } from "@hookstate/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { deleteSecret, getSecret } from "../../firebase/db";

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
          secret.set(res?.data?.secret);
        }
      });
    }
  }, [link]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <LinkWrapper>
      {isSecretShown.value ? (
        <SecretText>{secret.value}</SecretText>
      ) : (
        <ShowButton onClick={onShowSecret}>Show Secret</ShowButton>
      )}
    </LinkWrapper>
  );
}

const LinkWrapper = styled.div``;

const SecretText = styled.p``;

const ShowButton = styled.button``;
