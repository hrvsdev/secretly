import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { saveSecret } from "../../firebase/db";

export default function Secret(): JSX.Element {
  const value = useState<string>("");

  const onClick = (): void => {
    saveSecret(value.value);
  };

  return (
    <SecretWrapper>
      <Textarea placeholder="What's on your mind!" onChange={(e) => value.set(e.target.value)} />
      <Button onClick={onClick}>Get Link</Button>
    </SecretWrapper>
  );
}

const SecretWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  margin-bottom: 1.5rem;
  height: 10rem;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: fit-content;
  font-size: 1rem;
  padding: 5px 10px;
  outline: 0;
  cursor: pointer;
`;
