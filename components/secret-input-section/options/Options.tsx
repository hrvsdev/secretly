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
      <Top visible={areOptionsShown.value}>
        <PasswordWrapper>
          <Label>Encrypt with a password otherwise leave empty</Label>
          <Input placeholder="Enter password" />
        </PasswordWrapper>
        <MessageWrapper>
          <Label>Optional message</Label>
          <Input placeholder="Enter password" />
        </MessageWrapper>
        <ReadRecieptWrapper>
          <Label>Read reciept on email otherwise leave empty</Label>
          <Input placeholder="Enter email" />
        </ReadRecieptWrapper>
        <SelectBoxWrapper>
          <ViewsWrapper>
            <Label>Views after link with be deleted</Label>
            <Select>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5</Option>
              <Option>10</Option>
              <Option>20</Option>
              <Option>50</Option>
              <Option>100</Option>
              <Option>200</Option>
              <Option>500</Option>
              <Option>Unlimited</Option>
            </Select>
          </ViewsWrapper>
        </SelectBoxWrapper>
        <Blank />
      </Top>
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
  color: white;
  overflow: hidden;
  transition: max-height 500ms;
  max-height: ${({ visible }) => (visible ? "500px" : "0")};
`;

const PasswordWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const MessageWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const ReadRecieptWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ViewsWrapper = styled.div``;
const TimeWrapper = styled.div``;

const Select = styled.select``;
const Option = styled.option``;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: white;
  padding-left: 6px;
  font-weight: 300;
`;

const Input = styled.input`
  all: unset;
  height: 50px;
  width: 100%;
  color: black;
  padding: 0 20px;
  border-radius: 10px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(300%) blur(5px);
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

const Blank = styled.div`
  height: 10px;
  width: 100%;
`;
