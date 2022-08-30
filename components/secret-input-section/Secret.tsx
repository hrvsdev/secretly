import { useState } from "@hookstate/core";
import styled from "@emotion/styled";
import isUrl from "is-url";
import prependHttp from "prepend-http";

import Options from "./options";
import Tabs from "./tabs";
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

  // Active tab state
  const activeTab = useState<"text" | "redirect">("text");

  // Create button click action
  const onCreateButton = async () => {
    if (value.value.trim()) {
      isLoading.set(true);
      const key = genKey();
      const encrypted = encrypt(value.value, key);
      const res = await saveSecret({ type: activeTab.value, secret: encrypted });
      if (res.data?.id) link.set(genLink(res.data.id, key));
      isLinkShown.set(true);
      isLoading.set(false);
    }
  };

  // Disabling create button function
  const disableButton = () => {
    if (activeTab.value === "text") return !value.value.trim();
    if (activeTab.value === "redirect") return !isUrl(prependHttp(value.value));
  };

  // Components props
  const optionsProps = {
    isCreateButtonDisabled: disableButton() || false,
    isLoading: isLoading.value,
    onCreateButton: onCreateButton,
    password: password,
    message: message,
    email: email,
  };

  // Link View Props
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
        <Tabs value={value} active={activeTab} />
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
