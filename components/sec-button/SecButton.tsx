import styled from "@emotion/styled";
import { ReactNode } from "react";

export default function SecButton({ children }: { children: ReactNode }) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  all: unset;
  color: #0073ff;
  border-radius: 10px;
  padding: 0px 20px;
  cursor: pointer;
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(0, 0%, 100%, 0.05);
  transition: all 250ms;
  @media (max-width: 600px) {
    padding: 0;
  }

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.06);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
