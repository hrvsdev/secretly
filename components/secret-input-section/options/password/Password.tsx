import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import { password } from "../../store";

export default function Password(): JSX.Element {
  // Input value state
  const value = useState(password);

  // Input change action
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    value.set(e.target.value);
  };

  return (
    <PasswordWrapper>
      <Label>
        <LabelText>Enter a password to encrypt</LabelText>
        <Input
          type="text"
          value={value.value}
          onChange={onChange}
          placeholder="Enter a secure password"
        />
      </Label>
    </PasswordWrapper>
  );
}

const PasswordWrapper = styled.div``;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const LabelText = styled.span``;

const Input = styled.input`
  all: unset;
  cursor: initial;
  background: hsla(0, 0%, 0%, 0.3);
  border-radius: 10px;
  height: 54px;
  padding: 0 20px;
`;
