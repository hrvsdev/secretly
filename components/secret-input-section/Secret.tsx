import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import Options from "./options";
import TextareaInput from "./textarea";
import LinkView from "../link-view-section";

import { saveSecret } from "../../firebase/db";
import { encrypt, genKey, genLink } from "../../utils/utils";

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
    if (value.value.trim()) {
      isLoading.set(true);
      const key = genKey();
      const encrypted = encrypt(value.value, key);
      const res = await saveSecret(encrypted);
      if (res.data?.id) link.set(genLink(res.data.id, key));
      isLinkShown.set(true);
      isLoading.set(false);
    }
  };

  // Components props
  const optionsProps = {
    isCreateButtonDisabled: value.value.trim().length ? false : true,
    isLoading: isLoading.value,
    onCreateButton: onCreateButton,
    password: password,
    message: message,
    email: email,
  };

  const linkViewProps = {
    isLinkShown: isLinkShown.value,
    link: link.value,
    onCreateNew: () => {
      value.set("");
      isLinkShown.set(false);
      link.set("");
    },
  };

  return (
    <Section>
      <LinkView {...linkViewProps} />
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
