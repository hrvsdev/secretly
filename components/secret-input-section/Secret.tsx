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
        <TextareaBox>
          <Textarea
            placeholder="What's on your mind!"
            onChange={(e) => value.set(e.target.value)}
          />
        </TextareaBox>
        <OptionsWrapper>
          <Bottom>
            <p>More</p>
            <Button onClick={onClick}>Create Secret Link</Button>
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

const Heading = styled.h2`
  color: white;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 8px;
`;

const Para = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

const TextareaBox = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 15px;
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

const OptionsWrapper = styled.div``

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  all: unset;
  width: fit-content;
  height: 48px;
  color: #ffffff;
  background-color: hsl(295.71, 100%, 8%);
  border-radius: 10px;
  padding: 0 15px;
  cursor: pointer;
  will-change: transform;
  transition: all 0.1s;
`;
