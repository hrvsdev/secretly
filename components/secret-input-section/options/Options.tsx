import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import CreateButton from "../../button";

import type { OptionsTypes } from "../types";

export default function Options(props: OptionsTypes): JSX.Element {
  // Props destructuring
  const { message, email, password } = props;

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
      <Bottom>
        <CreateButton {...createButtonProps} />
      </Bottom>
      <Blank />
    </OptionsWrapper>
  );
}

const OptionsWrapper = styled.div``;

const Top = styled.div<{ visible: boolean }>`
  color: white;
  overflow: hidden;
  transition: max-height 500ms;
  max-height: ${({ visible }) => (visible ? "500px" : "0")};
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const MoreButton = styled.button<{ active: boolean }>`
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

  
  @media (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

const Blank = styled.div`
  height: 10px;
  width: 100%;
`;
