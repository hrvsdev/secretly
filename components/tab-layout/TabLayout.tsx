import styled from "@emotion/styled";
import { TabListTypes, TabPanelTypes, TabsTypes, TabTypes } from "./types";

export function Tabs({ children }: TabsTypes) {
  return <TabsStyled>{children}</TabsStyled>;
}

export function TabList({ children }: TabListTypes) {
  return <TabListStyled>{children}</TabListStyled>;
}

export function Tab({ children, id, title, active }: TabTypes) {
  return (
    <TabStyled onClick={() => active.set(id)} active={active.value === id}>
      {children ? children : title}
    </TabStyled>
  );
}

export function TabPanel({ children, id, active }: TabPanelTypes) {
  return id === active.value ? <TabPanelStyled>{children}</TabPanelStyled> : null;
}

const TabsStyled = styled.div`
  margin-bottom: 15px;
  color: white;
`;

const TabListStyled = styled.div`
  height: 45px;
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: row;
`;

const TabStyled = styled.button<{ active?: boolean }>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: -2px;
  padding: 0 18px;
  cursor: pointer;
  transition: all 250ms;
  border-radius: 5px 5px 0 0;
  color: ${({ active }) => active && "#0072f5"};
  border-bottom: 2px solid ${({ active }) => (active ? "currentcolor" : "transparent")};

  &:hover{
    background-color: rgba(255, 255, 255, 0.03);
  }

  &:active{
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const TabPanelStyled = styled.div``;