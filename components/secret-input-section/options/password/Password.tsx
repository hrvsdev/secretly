import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { If, Then, Else } from "react-if";

import { BiShow, BiHide, BiKey } from "react-icons/bi";

import { password } from "../../store";

export default function Password(): JSX.Element {
  // Input value state
  const value = useState(password);

  // Password shown state
  const isPasswordShown = useState(false);

  // Show password button action
  const onShowPassword = () => isPasswordShown.set((prev) => !prev);

  // Input change action
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    value.set(e.target.value);
  };

  return (
    <PasswordWrapper>
      <Heading>Encrypt with password</Heading>
      <InputWrapper>
        <KeyIcon size={28} />
        <Input
          type={isPasswordShown.value ? "text" : "password"}
          autoComplete="new-password"
          value={value.value}
          onChange={onChange}
          placeholder="Enter a secure password"
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
      <Info>
        <p>
          Enter an optional password to make secret even more secure. Even if you leave this, your
          secret will always be encrypted and secure.
        </p>
        <p>
          You should send password with other method rather than sending link and password together.
        </p>
      </Info>
    </PasswordWrapper>
  );
}

const PasswordWrapper = styled.div`
  margin: 25px 0 50px;
`;

const Heading = styled.h2`
  padding-left: 8px;
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 25px;
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

const Input = styled.input`
  all: unset;
  cursor: initial;
  box-sizing: border-box;
  width: 100%;
  background: hsla(0, 0%, 0%, 0.3);
  border-radius: 10px;
  height: 54px;
  padding: 0 65px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  font-size: 15px;
  padding-left: 8px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 25px;
`;
