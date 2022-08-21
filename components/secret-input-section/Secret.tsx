import styled from "@emotion/styled";
import { useState } from "@hookstate/core";
import { saveSecret } from "../../firebase/db";

import { BiChevronDown } from "react-icons/bi";

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
            <MoreButton active>
              <BiChevronDown /> Set options
            </MoreButton>
            <CreateButton
              disabled={value.value.trim() ? false : true}
              loading={true}
              onClick={onClick}>
              <span className="loader"></span>
              <span className="text">Create Secret Link</span>
            </CreateButton>
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
`;

const MoreButton = styled.button<{ active: boolean }>`
  all: unset;
  color: #d9d9d9;
  border-radius: 5px;
  padding: 0 8px 0 5px;
  cursor: pointer;
  height: 30px;
  font-size: 13px;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    transition: transform 200ms;
  }

  &:active {
    svg {
      transform: rotate(180deg);
    }
  }
`;

const CreateButton = styled.button<{ loading: boolean }>`
  all: unset;
  width: 140px;
  height: 48px;
  color: #ffffff;
  background-color: #0072f5;
  border-radius: 10px;
  padding: 0 20px;
  will-change: transform filter;
  transition: all 0.25s;
  cursor: not-allowed;

  &:enabled {
    ${({ loading }) =>
      !loading &&
      `cursor: pointer;
      &:hover {
        filter: brightness(1.2);
      }
  
      &:active {
        transform: scale(0.96);
      }`}
  }

  &:disabled {
    opacity: 0.5;
  }

  .text {
    display: ${({ loading }) => (loading ? "none" : "inline-block")};
  }

  .loader {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border-top: 2px solid #fff;
    border-right: 2px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    display: ${({ loading }) => (loading ? "inline-block" : "none")};
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
