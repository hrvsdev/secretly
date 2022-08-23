import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import Options from "./options";
import TextareaInput from "./textarea";

import { saveSecret } from "../../firebase/db";

export default function Secret(): JSX.Element {
  // Textarea value state
  const value = useState("");

  // Loading state for data saving
  const isLoading = useState(false);

  // Create button click action
  const onCreateButton = (): void => {
    isLoading.set(true);
    saveSecret(value.value);
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
      <SecretWrapper>
        <TextareaInput value={value} />
        <Options {...optionsProps} />
      </SecretWrapper>
    </Section>
  );
}

const Section = styled.section`
  padding: 20px;
`;

const SecretWrapper = styled.div`
  margin: auto;
  max-width: 760px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
