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
      <Heading>Encrypt with password</Heading>
      <Input
        type="text"
        value={value.value}
        onChange={onChange}
        placeholder="Enter a secure password"
      />
      <Info>
        <p>
          Enter an optional password to make secret even more secure. Even if you leave this, your
          secret will always be encrypted and secure.
        </p>
        <p>You should send password with other method rather than sending link and password together.</p>
      </Info>
    </PasswordWrapper>
  );
}

const PasswordWrapper = styled.div`
  margin: 25px 0;
`;

const Heading = styled.h2`
  padding-left: 8px;
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 20px;
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
  margin-bottom: 25px;
`;

const Info = styled.p`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  font-size: 15px;
  padding-left: 8px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 25px;
`;

const Br = styled.br`
  margin-bottom: 10px;
`;
