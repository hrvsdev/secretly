import styled from "@emotion/styled";
import { CreateButtonTypes } from "../types";

export default function CreateButton(props: CreateButtonTypes) {
  const { disabled, loading, onClick } = props;

  return (
    <Button disabled={disabled} loading={loading} onClick={onClick}>
      <span className="loader"></span>
      <span className="text">Create Secret Link</span>
    </Button>
  );
}

const Button = styled.button<{ loading: boolean }>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 48px;
  color: #ffffff;
  background-color: #0072f5;
  border-radius: 10px;
  padding: 0 20px;
  will-change: transform filter;
  transition: all 0.25s;

  &:enabled {
    cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
    &:hover {
      filter: ${({ loading }) => (loading ? "unset" : "brightness(1.2)")};
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
