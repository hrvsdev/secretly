import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import { BiChevronDown } from "react-icons/bi";

import CreateButton from "../create-button";

import { OptionsTypes } from "../types";

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
      <Top visible={areOptionsShown.value}></Top>
      <Bottom>
        <MoreButton active={areOptionsShown.value} onClick={onMoreOptions}>
          <BiChevronDown /> Set options
        </MoreButton>
        <CreateButton {...createButtonProps} />
      </Bottom>
    </OptionsWrapper>
  );
}

const OptionsWrapper = styled.div``;

const Top = styled.div<{ visible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  overflow: hidden;
  transition: height 300ms;
  height: ${({ visible }) => !visible && "0"};
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
    transform: ${({ active }) => (active ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;
