import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import Options from "./options";
import TextareaInput from "./textarea";
import LinkView from "../link-view-section";

import { saveSecret } from "../../firebase/db";

export default function Secret(): JSX.Element {
  // Values state
  const value = useState("");
  const password = useState("");
  const message = useState("");
  const email = useState("");
  const link = useState("");

  // Loading state for data saving
  const isLoading = useState(false);

  // Link shown state
  const isLinkShown = useState(false);

  // Create button click action
  const onCreateButton = async () => {
    isLoading.set(true);
    try {
      const res = await saveSecret(value.value);
      link.set(`https://secretly.vercel.app/${res.data?.id}`);
      isLinkShown.set(true);
      isLoading.set(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Options component props
  const optionsProps = {
    isCreateButtonDisabled: value.value.trim().length ? false : true,
    isLoading: isLoading.value,
    onCreateButton: onCreateButton,
    password: password,
    message: message,
    email: email,
  };

  return (
    <Section>
      <LinkView isLinkShown={isLinkShown.value} link={link.value} />
      <SecretWrapper show={!isLinkShown.value}>
        <TextareaInput value={value} />
        <Options {...optionsProps} />
      </SecretWrapper>
    </Section>
  );
}

const Section = styled.section``;

const SecretWrapper = styled.div<{ show: boolean }>`
  margin: auto;
  max-width: 800px;
  padding: 0 20px;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  flex-direction: column;
`;
