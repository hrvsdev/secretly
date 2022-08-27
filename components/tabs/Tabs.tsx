import styled from "@emotion/styled";

export function TabList({ children }: { children: React.ReactNode }) {
  return <TabListStyled>{children}</TabListStyled>;
}

export function Tabs({ children }: { children: React.ReactNode }) {
  return <TabsStyled>{children}</TabsStyled>;
}

export function Tab({ children }: { children: React.ReactNode }) {
  return <TabStyled>{children}</TabStyled>;
}

export function TabPanel({ children }: { children: React.ReactNode }) {
  return <TabPanelStyled>{children}</TabPanelStyled>;
}

export default function Component() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
    </Tabs>
  );
}

const TabsStyled = styled.div`
  margin-bottom: 20px;
  color: white;
`;

const TabListStyled = styled.div`
  height: 50px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: row;
`;

const TabStyled = styled.div<{ active?: true }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: -2px;
  padding: 0 16px;
  cursor: pointer;
  color: ${({ active }) => active && "#0072f5"};
  border-bottom: 2px solid ${({ active }) => (active ? "currentcolor" : "transparent")};
`;

const TabPanelStyled = styled.div``;
