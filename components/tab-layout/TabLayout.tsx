import styled from "@emotion/styled";

import type { TabListTypes, TabPanelTypes, TabsTypes, TabTypes } from "./types";

export function Tabs({ children }: TabsTypes) {
  return <TabsStyled>{children}</TabsStyled>;
}

export function List({ children }: TabListTypes) {
  return (
    <TabListStyled>
      <div>{children}</div>
    </TabListStyled>
  );
}

export function Tab({ children, id, title, active, error }: TabTypes) {
  return (
    <TabStyled onClick={() => active.set(id)} active={active.value === id} error={error}>
      {children ? children : title}
    </TabStyled>
  );
}

export function Panel({ children, id, active }: TabPanelTypes) {
  return id === active.value ? <TabPanelStyled>{children}</TabPanelStyled> : null;
}

const TabsStyled = styled.div`
  margin-bottom: 15px;
  color: white;
`;

const TabListStyled = styled.div`
  position: relative;
  
  div {
    height: 45px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  }
`;

const TabStyled = styled.button<{ active?: boolean; error?: boolean }>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 0 22px;
  cursor: pointer;
  transition: all 250ms;
  border-radius: 5px 5px 0 0;
  color: ${({ active }) => active && "#0072f5"};
  color: ${({ error }) => error && "#ff0800"};
  border-bottom: 2px solid ${({ active }) => (active ? "currentcolor" : "transparent")};

  &:first-of-type {
    margin-left: auto;
  }

  &:last-of-type {
    margin-right: auto;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.03);
    }
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const TabPanelStyled = styled.div``;
