import styled from "@emotion/styled";
import isUrl from "is-url";
import prependHttp from "prepend-http";
import { Else, If, Then } from "react-if";
import { useState } from "@hookstate/core";
import { useMemo } from "react";

import Options from "./options";
import Tabs from "./tabs";
import LinkView from "../link-view-section";

import { password, deliveryEmail } from "./store";

import { saveSecret } from "../../firebase/db";
import { encrypt, genKey, genLink } from "../../utils/utils";

import type { SecretDataTypes } from "../../firebase/types";

export default function Secret(): JSX.Element {
  // Values state
  const value = useState("");
  const link = useState("");

  // Loading state for data saving
  const isLoading = useState(false);

  // Link shown state
  const isLinkShown = useState(false);

  // Active tab state
  const activeTab = useState("text");

  // Value used to save data
  const valueToSave = useMemo(() => {
    if (activeTab.value === "text") return value.value.trim();
    else return prependHttp(value.value.trim());
  }, [value.value, activeTab.value]);

  // Create button click action
  const onCreateButton = async () => {
    isLoading.set(true);
    const key = genKey();
    const encrypted = encrypt(data(password.value), key);
    const res = await saveSecret(encrypted);
    if (res.data?.id) {
      link.set(genLink(res.data.id, key));
      isLinkShown.set(true);
      isLoading.set(false);
      deliveryEmail.value && sendMail()
    }
  };

  // Data to save
  const data = (password: string): SecretDataTypes => {
    const isEncryptedWithPassword = password.trim() ? true : false;
    return {
      type: activeTab.value,
      secret: isEncryptedWithPassword ? encrypt(valueToSave, password) : valueToSave,
      isEncryptedWithPassword: isEncryptedWithPassword,
    };
  };

  // Sending mail
  const sendMail = async () => {
    const email = encodeURIComponent(deliveryEmail.value);
    const secretLink = encodeURIComponent(link.value);
    console.log({email, secretLink})
    const URL = `/api/send-mail?email=${email}&link=${secretLink}`;
    await fetch(URL);
  };

  // Disabling create button function
  const disableButton = () => {
    if (activeTab.value === "text") return !valueToSave;
    if (activeTab.value === "redirect") return !isUrl(valueToSave);
  };

  // Options props
  const optionsProps = {
    isCreateButtonDisabled: disableButton() || false,
    isLoading: isLoading.value,
    onCreateButton: onCreateButton,
  };

  // Link View Props
  const linkViewProps = {
    link: link.value,
    onCreateNew: () => {
      value.set("");
      isLinkShown.set(false);
      link.set("");
      password.set("");
    },
  };

  return (
    <Section>
      <If condition={isLinkShown.value}>
        <Then>
          <LinkView {...linkViewProps} />
        </Then>
        <Else>
          <SecretWrapper>
            <Tabs value={value} active={activeTab} />
            <Options {...optionsProps} />
          </SecretWrapper>
        </Else>
      </If>
    </Section>
  );
}

const Section = styled.section``;

const SecretWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
