import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { If, Then, Else } from "react-if";

import { BiShow, BiHide, BiKey } from "react-icons/bi";

export default function Password(): JSX.Element {
  // Input value state
  const value = useState("");

  // Password shown state
  const isPasswordShown = useState(false);

  // Input change action
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    value.set(e.target.value);
  };

  // Show password button action
  const onShowPassword = () => isPasswordShown.set((prev) => !prev);

  return (
    <PasswordRootWrapper>
      <Heading>Enter the password</Heading>
      <InputWrapper>
        <KeyIcon size={28} />
        <Input
          type={isPasswordShown.value ? "text" : "password"}
          value={value.value}
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
    </PasswordRootWrapper>
  );
}

const PasswordRootWrapper = styled.div`
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
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  position: relative;
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
  height: 60px;
  padding: 0 65px;
`;
