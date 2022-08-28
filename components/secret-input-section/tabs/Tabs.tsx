import { useState } from "@hookstate/core";
import { Tabs, TabList, Tab, TabPanel } from "../../tab-layout";


export default function TabsComp() {
  const active = useState("1");

  return (
    <Tabs>
      <TabList>
        <Tab title="Text" id="1" active={active} />
        <Tab title="Redirect" id="2" active={active} />
        <Tab title="Animated" id="3" active={active} />
      </TabList>
      <TabPanel id="1" active={active}>Content 1</TabPanel>
      <TabPanel id="2" active={active}>Content 2</TabPanel>
      <TabPanel id="3" active={active}>Content 3</TabPanel>
    </Tabs>
  );
}
