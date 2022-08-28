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
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  padding: 5px;
  background-color: hsla(0, 0%, 0%, 0.3);
  border-radius: 10px;
`;

const TabStyled = styled.button<{ active?: boolean }>`
  all: unset;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  /* margin-bottom: -2px; */
  padding: 0 18px;
  cursor: pointer;
  transition: all 250ms;
  border-radius: 5px;
  background-color: ${({ active }) => (active && "#0072f5")};
  
  &:active {
    background-color: rgba(0, 114, 245, 0.4);
  }
`;

const TabPanelStyled = styled.div``;
