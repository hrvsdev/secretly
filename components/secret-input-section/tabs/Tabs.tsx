import { useState } from "@hookstate/core";
import { Tabs, TabList, Tab, TabPanel } from "../../tab-layout";

export default function TabsComp() {
  const active = useState("1");

  return (
    <Tabs>
      <TabList>
        <Tab title="One" id="1" active={active} />
        <Tab title="Two" id="2" active={active} />
        <Tab title="Three" id="3" active={active} />
        <Tab title="Four" id="4" active={active} />
      </TabList>
      <TabPanel id="1" active={active}>Content 1</TabPanel>
      <TabPanel id="2" active={active}>Content 2</TabPanel>
      <TabPanel id="3" active={active}>Content 3</TabPanel>
      <TabPanel id="4" active={active}>Content 4</TabPanel>
    </Tabs>
  );
}
