import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function TabsComp() {
  return (
    <TabsWrapper>
      <Header>
        <Button>Password</Button>
        <Button>Message</Button>
      </Header>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.div`
  margin-bottom: 20px;
  color: white;
`;

const Header = styled.div`
  height: 50px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: -2px;
  padding: 0 16px;
  cursor: pointer;
`;

const Content = styled.div`
  color: white;
`;
