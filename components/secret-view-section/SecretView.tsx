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
import { invalidKeyErr, secretNotFoundErr } from "./error/errors";

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
  const readReceiptEmail = useState("");

  // Error and loading states
  const isLoading = useState(false);
  const isError = useState(false);
  const isPasswordIncorrect = useState(false);

  // Error text state
  const errText = useState("Something wrong happened!");

  // Component visibility states
  const isSecretShown = useState(false);
  const isPasswordInputShown = useState(false);

  // View secret button action
  const onShowSecret = async () => {
    await getSecretFromDB();
    deleteSecret(link);
  };

  // Getting secret from DB
  const getSecretFromDB = async () => {
    isLoading.set(true);

    // Getting hash from URL and showing error if not found
    const hash = getHash();
    if (!hash.trim() || !(hash.length === 20))
      return errText.set(invalidKeyErr), isError.set(true);

    // Getting data from database dnd showing error if not found
    const res = await getSecret(link);
    const data = res.data;

    if (!data) return errText.set(secretNotFoundErr), isError.set(true);

    // Decrypting the data and showing error if it fails
    const decrypted: SecretDataTypes = decrypt(data.data, hash);

    if (!decrypted) return errText.set(invalidKeyErr), isError.set(true);

    // Setting data to the states
    secret.set(decrypted.secret);
    secretType.set(decrypted.type);
    readReceiptEmail.set(decrypted.readRecieptEmail);

    // Sending read receipt to the email
    sendMail(link);

    // If secret is password protected, then showing password box otherwise showing them secret
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

  // Sending mail
  const sendMail = async (id: string) => {
    const email = encodeURIComponent(readReceiptEmail.value);

    if (!email) return;

    const URL = `/api/send-mail?type=receipt&email=${email}&id=${id}`;
    await fetch(URL);
  };

  // Password component props
  const passwordProps = {
    password: password,
    onSubmit: decryptWithPassword,
    isError: isPasswordIncorrect,
  };

  // Setting hero props
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
          <Error err={errText.value} />
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
