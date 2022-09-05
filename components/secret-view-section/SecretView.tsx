import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { useRouter } from "next/router";
import { Switch, Case, Default } from "react-if";

import Hero from "../hero";
import Error from "./error";
import Password from "./password";
import ViewButton from "./view-button";
import Viewer from "./viewer";

import { useHero } from "../hero/store";
import { deleteSecret, getSecret } from "../../firebase/db";
import { getHash, decrypt } from "../../utils/utils";

import type { SecretDataTypes } from "../../firebase/types";

export default function Link(): JSX.Element {
  // Router and URL link
  const router = useRouter();
  const link = router.query.link as string;

  // Secret data value states
  const secret = useState("");
  const decryptedSecret = useState("");
  const secretType = useState("text");
  const password = useState("");

  // Error and loading states
  const isLoading = useState(false);
  const isError = useState(false);
  const isPasswordIncorrect = useState(false);

  // Component visibility states
  const isSecretShown = useState(false);
  const isPasswordInputShown = useState(false);

  // Component prop hook state
  const hero = useHero();

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

  // Setting hero props
  hero.set({
    heading: "Here is a secret",
    para: "Click the button below to view the secret. Copy it as it will be deleted instantly.",
  });

  return (
    <Main>
      <Hero />
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
