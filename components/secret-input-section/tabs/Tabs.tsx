import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function TabsComp() {
  return (
    <Tabs>
      <TabList>
        <Button>Title 1</Button>
        <Button>Title 2</Button>
      </TabList>
      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
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

const Button = styled(Tab)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: -2px;
  padding: 0 16px;
  cursor: pointer;
`;

const Content = styled.div``;
