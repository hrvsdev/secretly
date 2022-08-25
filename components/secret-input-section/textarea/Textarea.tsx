import styled from "@emotion/styled";

import { TextareaTypes } from "../types";

export default function TextareaInput({ value }: TextareaTypes): JSX.Element {
  return (
    <TextareaBox>
      <Textarea
        placeholder="What's on your mind!"
        onChange={(e) => value.set(e.target.value)}
        value={value.value}
        spellCheck={false}
      />
    </TextareaBox>
  );
}

const TextareaBox = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 15px;
  background: hsla(0, 0%, 0%, 0.3);
`;

const Textarea = styled.textarea`
  padding: 0 20px;
  height: 10rem;
  font-size: 1rem;
  resize: none;
  border: 0;
  background: transparent;
  width: 100%;
  color: white;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: hsl(0, 0%, 100%, 0.5);
  }
`;
