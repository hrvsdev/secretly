import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { useRouter } from "next/router";
import { Switch, Case, Default } from "react-if";

import Hero from "../hero";
import Error from "./error";
import Password from "./password";
import ViewButton from "./view-button";
import Viewer from "./viewer";

import { deleteSecret, getSecret } from "../../firebase/db";
import { getHash, decrypt } from "../../utils/utils";

import type { SecretDataTypes } from "../../firebase/types";

export default function Link(): JSX.Element {
  // Router hook
  const router = useRouter();

  // Link from URL parameter
  const link = router.query.link as string;

  // Secret text value state
  const secret = useState("");

  // Decrypted secret
  const decryptedSecret = useState("");

  // Secret type
  const secretType = useState("text");

  // Password value state
  const password = useState("");

  // Show secret state
  const isSecretShown = useState(false);

  // Show password input state
  const isPasswordInputShown = useState(false);

  // Error state
  const isError = useState(false);

  // Password incorrect state
  const isPasswordIncorrect = useState(false);

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

    if (!data) return isError.set(true);

    const decrypted: SecretDataTypes = decrypt(data.data, getHash());

    if (!decrypted) return isError.set(true);

    secret.set(decrypted.secret);
    secretType.set(decrypted.type);

    if (decrypted.isEncryptedWithPassword) isPasswordInputShown.set(true);
    else decryptedSecret.set(secret.value), showOrRedirect();
  };

  // Show secret or redirect according to type of secret
  const showOrRedirect = () => {
    switch (secretType.value) {
      case "text":
        isSecretShown.set(true);
        break;
      case "redirect":
        router.push(decryptedSecret.value);
    }
  };

  // Decrypting with password
  const decryptWithPassword = () => {
    const decrypted = decrypt(secret.value, password.value);
    if (decrypted) decryptedSecret.set(decrypted), showOrRedirect();
    else isPasswordIncorrect.set(true);
  };

  // Password component props
  const passwordProps = {
    password: password,
    onSubmit: decryptWithPassword,
    isError: isPasswordIncorrect,
  };

  // Hero component props
  const heroProps = {
    heading: "Here is a secret",
    para: "Click the button below to view the secret. Copy it as it will be deleted instantly.",
  };

  return (
    <Main>
      <Hero {...heroProps} />
      <Switch>
        <Default>
          <ViewButton isLoading={isLoading.value} onClick={onShowSecret} />
        </Default>
        <Case condition={isError.value}>
          <Error />
        </Case>
        <Case condition={isSecretShown.value}>
          <Viewer secret={decryptedSecret.value} />
        </Case>
        <Case condition={isPasswordInputShown.value}>
          <Password {...passwordProps} />
        </Case>
      </Switch>
    </Main>
  );
}

const Main = styled.main`
  min-height: 100vh;
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto;
`;
