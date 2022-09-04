import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { If, Then, Else, When } from "react-if";

import { BiShow, BiHide, BiKey } from "react-icons/bi";

import Button from "../../button";

import type { PasswordTypes } from "./types";

export default function Password(props: PasswordTypes): JSX.Element {
  // Props destructuring
  const { password, isError, onSubmit: onDecrypt } = props;

  // Password shown state
  const isPasswordShown = useState(false);

  // Input change action
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    password.set(e.target.value);
  };

  // Show password button action
  const onShowPassword = () => isPasswordShown.set((prev) => !prev);

  // Submit button click action
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDecrypt();
  };

  // Input focus action
  const onInputFocus = () => isError.set(false);

  return (
    <Section>
      <PasswordWrapper onSubmit={onSubmit}>
        <Heading>Enter the password</Heading>
        <InputWrapper>
          <KeyIcon size={28} />
          <Input
            isError={isError.value}
            type={isPasswordShown.value ? "text" : "password"}
            value={password.value}
            onFocus={onInputFocus}
            onChange={onChange}
            placeholder="Enter the password to decrypt"
          />
          <If condition={isPasswordShown.value}>
            <Then>
              <HideIcon size={24} onClick={onShowPassword} />
            </Then>
            <Else>
              <ShowIcon size={24} onClick={onShowPassword} />
            </Else>
          </If>
        </InputWrapper>
        <ButtonWrapper>
          <When condition={isError.value}>
            <Error>Entered passsword is incorrect</Error>
          </When>
          <Button type="submit">Decrypt Secret</Button>
        </ButtonWrapper>
      </PasswordWrapper>
    </Section>
  );
}

const Section = styled.section``

const PasswordWrapper = styled.form`
  margin: auto;
  max-width: 800px;
  border-radius: 20px;
  color: white;
`;

const Heading = styled.h2`
  font-weight: 500;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 600px) {
    text-align: left;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;

  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

const KeyIcon = styled(BiKey)`
  position: absolute;
  left: 20px;
`;

const ShowIcon = styled(BiShow)`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

const HideIcon = styled(BiHide)`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

const Input = styled.input<{ isError: boolean }>`
  all: unset;
  cursor: initial;
  box-sizing: border-box;
  width: 100%;
  background: hsla(0, 0%, 0%, 0.3);
  outline: ${({ isError }) => (isError ? "1px solid rgb(255, 8, 0)" : "none")};
  border-radius: 10px;
  height: 60px;
  padding: 0 65px;
`;

const Error = styled.p`
  padding-left: 8px;
  font-weight: 300;
  color: rgb(255, 8, 0);
  font-size: 13px;

  @media (max-width: 600px) {
    margin-top: 5px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin-left: auto;
    @media (max-width: 600px) {
      margin-top: 15px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
