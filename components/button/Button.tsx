import styled from "@emotion/styled";

import type { ButtonTypes } from "./types";

export default function Button(props: ButtonTypes): JSX.Element {
  const { onClick, isLoading, children, isDisabled } = props;

  return (
    <ButtonStyled disabled={isDisabled} loading={+isLoading} onClick={onClick}>
      <span className="loader" />
      <span className="text">{children}</span>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<{ loading: number }>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 140px;
  height: 48px;
  color: #ffffff;
  background-color: #0072f5;
  border-radius: 10px;
  padding: 0 20px;
  will-change: transform;
  transition: all 0.25s;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;
  }

  &:enabled {
    cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
    
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        filter: ${({ loading }) => (loading ? "unset" : "brightness(1.2)")};
      }
    }

    &:active {
      transform: ${({ loading }) => (loading ? "unset" : "scale(0.96)")};
    }
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

Button.defaultProps = {
  isDisabled: false,
  isLoading: false,
  children: "Create Secret Link",
  onClick: () => {},
};
