import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import { BiChevronDown } from "react-icons/bi";

import CreateButton from "../../button";
import Top from "./top";

import type { OptionsTypes } from "../types";

export default function Options(props: OptionsTypes): JSX.Element {
  
  // Show more options state
  const areOptionsShown = useState(false);

  // More options button action
  const onMoreOptions = () => areOptionsShown.set((prev) => !prev);

  // Create button component props
  const createButtonProps = {
    isDisabled: props.isCreateButtonDisabled,
    isLoading: props.isLoading,
    onClick: props.onCreateButton,
  };

  return (
    <OptionsWrapper>
      <Top isVisible={areOptionsShown.value} />
      <Bottom>
        <MoreButton active={areOptionsShown.value} onClick={onMoreOptions}>
          <BiChevronDown />
          More Options
        </MoreButton>
        <CreateButton {...createButtonProps} />
      </Bottom>
    </OptionsWrapper>
  );
}

const OptionsWrapper = styled.div``;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    row-gap: 15px;
  }
`;

const MoreButton = styled.button<{ active?: boolean }>`
  all: unset;
  color: #d9d9d9;
  border-radius: 5px;
  padding: 0 8px 0 5px;
  cursor: pointer;
  height: 30px;
  width: fit-content;
  font-size: 13px;
  display: flex;
  align-items: center;
  transition: all 250ms;

  @media (max-width: 600px) {
    color: #0073ff;
    background-color: hsla(0, 0%, 100%, 0.05);
    padding: 0;
    width: 100%;
    height: 48px;
    justify-content: center;
    border-radius: 10px;
    font-size: 15px;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: hsla(0, 0%, 100%, 0.05);
    }
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    transition: transform 200ms;
    transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;