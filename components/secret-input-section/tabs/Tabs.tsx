import { useState } from "@hookstate/core";
import { Tabs, TabList, Tab } from "../../tab-layout";

export default function TabsComp() {
  const active = useState("1");

  return (
    <Tabs>
      <TabList>
        <Tab title="One" id="1" active={active} />
      </TabList>
    </Tabs>
  );
}
