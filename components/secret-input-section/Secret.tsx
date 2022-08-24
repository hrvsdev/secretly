import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import Options from "./options";
import TextareaInput from "./textarea";
import LinkView from "../link-view-section";

import { saveSecret } from "../../firebase/db";

export default function Secret(): JSX.Element {
  // Textarea value state
  const value = useState("");

  // Values state
  const password = useState("");
  const message = useState("");
  const email = useState("");

  // Loading state for data saving
  const isLoading = useState(false);

  // Link shown state
  const isLinkShown = useState(false);

  // Create button click action
  const onCreateButton = (): void => {
    isLoading.set(true);
    setTimeout(() => {
      isLinkShown.set(true);
      isLoading.set(false);
    }, 1000);
    // saveSecret(value.value);
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
      <LinkView isLinkShown={isLinkShown.value} link="hello" />
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
