import { useState } from "@hookstate/core";
import { Tabs, TabList, Tab, TabPanel } from "../../tab-layout";

import { TabsTypes } from "../types";

import TextareaInput from "../textarea";

export default function TabsComp({ value }: TabsTypes): JSX.Element {
  const active = useState("1");

  return (
    <Tabs>
      <TabList>
        <Tab title="Text" id="1" active={active} />
        <Tab title="Redirect" id="2" active={active} />
        <Tab title="Animated" id="3" active={active} />
      </TabList>
      <TabPanel id="1" active={active}>
        <TextareaInput value={value}/>
      </TabPanel>
      <TabPanel id="2" active={active}>
        Content 2
      </TabPanel>
      <TabPanel id="3" active={active}>
        Content 3
      </TabPanel>
    </Tabs>
  );
}
