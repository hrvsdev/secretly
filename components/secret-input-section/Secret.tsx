import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { saveSecret } from "../../firebase/db";

export default function Secret(): JSX.Element {
  const value = useState<string>("");

  const onClick = (): void => {
    saveSecret(value.value);
  };

  return (
    <Section>
      <SecretWrapper>
        <Heading>Add a secret</Heading>
        <Para>You can try different options: Views, Time or Read Reciepts </Para>
        <TextareaBox>
          <Textarea
            placeholder="What's on your mind!"
            onChange={(e) => value.set(e.target.value)}
          />
        </TextareaBox>
        <Button onClick={onClick}>Get Link</Button>
      </SecretWrapper>
    </Section>
  );
}

const Section = styled.section`
  background: linear-gradient(135deg, hsl(321.42, 100%, 75%), hsl(295.71, 100%, 75%));
  padding: 40px 20px;
`;

const SecretWrapper = styled.div`
  margin: auto;
  max-width: 760px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled.h2`
  color: hsl(295.71, 100%, 8%);
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 8px;
  `;

const Para = styled.p`
  font-size: 1.2rem;
  color: hsl(295.71, 100%, 12%);
  text-align: center;
  margin-bottom: 30px;
`;

const TextareaBox = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(300%) blur(5px);
  box-shadow: #55435445 0 0 0.25em, #5a7dbc0d 0 0.25em 1em;
`;

const Textarea = styled.textarea`
  padding: 0 20px;
  height: 10rem;
  font-size: 1rem;
  resize: none;
  border: 0;
  background: transparent;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: fit-content;
  font-size: 1rem;
  padding: 5px 10px;
  outline: 0;
  cursor: pointer;
`;
