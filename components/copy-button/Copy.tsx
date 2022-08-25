import styled from "@emotion/styled";
import copy from "copy-to-clipboard";
import { useState } from "@hookstate/core";

import { BiCopy } from "react-icons/bi";

export default function Copy({ text }: { text: string }) {
  // Copied text state
  const isCopied = useState(false);

  // Copy button action
  const onCopy = () => {
    copy(text);
    isCopied.set(true);
    setTimeout(() => isCopied.set(false), 2000);
  };

  return (
    <CopyButton onClick={onCopy}>
      <BiCopy />
      {isCopied.value ? "Copied" : "Copy"}
    </CopyButton>
  );
}

const CopyButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  background-color: #0073ff;
  color: white;
  border-radius: 10px;
  will-change: transform filter;
  transition: all 0.25s;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    transform: scale(0.96);
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
`;
