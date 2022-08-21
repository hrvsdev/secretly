import styled from "@emotion/styled";

import { TextareaTypes } from "../types";

export default function TextareaInput({ value }: TextareaTypes): JSX.Element {
  return (
    <TextareaBox>
      <Textarea placeholder="What's on your mind!" onChange={(e) => value.set(e.target.value)} />
    </TextareaBox>
  );
}

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
