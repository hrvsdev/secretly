import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import { BiShow, BiHide, BiKey } from "react-icons/bi";

export default function Password(): JSX.Element {
  // Input value state
  const value = useState("");

  // Input change action
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    value.set(e.target.value);
  };

  return (
    <PasswordRootWrapper>
      <Heading>Enter the password</Heading>
      <InputWrapper>
        <KeyIcon size={24} />
        <Input
          type="password"
          value={value.value}
          onChange={onChange}
          placeholder="Enter the password to decrypt"
        />
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
`;

const Input = styled.input`
  all: unset;
  cursor: initial;
  box-sizing: border-box;
  width: 100%;
  background: hsla(0, 0%, 0%, 0.3);
  border-radius: 10px;
  height: 54px;
  padding: 0 20px;
`;
