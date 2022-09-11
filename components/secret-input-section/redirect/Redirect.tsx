import styled from "@emotion/styled";

import { BiLink } from "react-icons/bi";

import type { TextareaTypes } from "../types";

export default function RedirectInput({ value }: TextareaTypes): JSX.Element {
  return (
    <RedirectBox>
      <BiLink size={25} />
      <Input
        placeholder="Enter url to redirect"
        type="text"
        autoComplete="url"
        onChange={(e) => value.set(e.target.value)}
        value={value.value}
        spellCheck={false}
      />
    </RedirectBox>
  );
}

const RedirectBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 18px;
  border-radius: 10px;
  background: hsla(0, 0%, 0%, 0.3);

  svg {
    margin-right: 13px;
  }
`;

const Input = styled.input`
  height: 60px;
  font-size: 1rem;
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
