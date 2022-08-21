import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { saveSecret } from "../../firebase/db";

import {BiChevronDown} from "react-icons/bi"

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
          <Top></Top>
          <Bottom>
            <MoreButton>More</MoreButton>
            <CreateButton onClick={onClick}>Create Secret Link</CreateButton>
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

const OptionsWrapper = styled.div``;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MoreButton = styled.button`
  all: unset;
  color: white;
  border-radius: 10px;
  padding: 0 20px;
  cursor: pointer;
  height: 38px;

  &:hover{
    background-color: #000;
  }
`;

const CreateButton = styled.button`
  all: unset;
  width: fit-content;
  height: 48px;
  color: #ffffff;
  background-color: #0072f5;
  border-radius: 10px;
  padding: 0 20px;
  cursor: pointer;
  will-change: transform filter;
  transition: all 0.25s;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    transform: scale(0.96);
  }
`;
