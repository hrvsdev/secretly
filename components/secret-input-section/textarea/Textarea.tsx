import styled from "@emotion/styled";

import type { TextareaTypes } from "../types";

export default function TextareaInput({ value }: TextareaTypes): JSX.Element {
  return (
    <TextareaBox>
      <Textarea
        placeholder="Enter your secret,
        whether it's a password, PIN, keys, or anything else confidential."
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
  background: hsla(0, 0%, 0%, 0.3);
`;

const Textarea = styled.textarea`
  padding: 0 20px;
  height: 7rem;
  font-size: 1rem;
  resize: none;
  border: 0;
  background: transparent;
  width: 100%;
  color: white;
  line-height: 25px;

  &:focus {
    outline: none;
  }
`;
