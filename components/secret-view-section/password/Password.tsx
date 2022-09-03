import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

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
      <Input
        type="password"
        value={value.value}
        onChange={onChange}
        placeholder="Enter a secure password"
      />
    </PasswordRootWrapper>
  );
}

const PasswordRootWrapper = styled.div`
  margin: auto;
  padding: 0 20px;
  max-width: 800px;
  border-radius: 20px;
  color: white;
  border: 1px solid rgb(0, 114, 245);
  background-color: hsla(0, 0%, 0%, 0.1);
`;

const Heading = styled.h2`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 20px;
  text-align: center;
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

const Error = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 25px;
`;
