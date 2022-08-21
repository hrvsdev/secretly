import styled from "@emotion/styled";
import { useState, __state } from "@hookstate/core";
import { saveSecret } from "../../firebase/db";

import { BiChevronDown } from "react-icons/bi";
import TextareaInput from "./textarea";
import CreateButton from "./create-button";

export default function Secret(): JSX.Element {
  const value = useState<string>("");
  const loading = useState<boolean>(false);

  const onClick = (): void => {
    loading.set(true);
    saveSecret(value.value);
  };

  const createButtonProps = {
    disabled: value.value.trim().length ? false: true,
    loading: loading.value,
    onClick: onClick
  }

  return (
    <Section>
      <SecretWrapper>
        <TextareaInput value={value}/>
        <OptionsWrapper>
          <Top></Top>
          <Bottom>
            <MoreButton active={true}>
              <BiChevronDown /> Set options
            </MoreButton>
            <CreateButton {...createButtonProps}/>
          </Bottom>
        </OptionsWrapper>
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

const OptionsWrapper = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoreButton = styled.button<{ active: boolean }>`
  all: unset;
  color: #d9d9d9;
  border-radius: 5px;
  padding: 0 8px 0 5px;
  cursor: pointer;
  height: 30px;
  font-size: 13px;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    transition: transform 200ms;
    transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;
