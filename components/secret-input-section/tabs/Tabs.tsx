import { Tabs, TabList, Tab, TabPanel } from "../../tab-layout";

import { TabsTypes } from "../types";

import TextareaInput from "../textarea";
import RedirectInput from "../redirect";

export default function TabsComp({ value, active }: TabsTypes): JSX.Element {
  return (
    <Tabs>
      <TabList>
        <Tab title="Text" id="1" active={active} />
        <Tab title="Redirect" id="2" active={active} />
        <Tab title="Animated" id="3" active={active} />
      </TabList>
      <TabPanel id="1" active={active}>
        <TextareaInput value={value} />
      </TabPanel>
      <TabPanel id="2" active={active}>
        <RedirectInput value={value} />
      </TabPanel>
      <TabPanel id="3" active={active}>
        Content 3
      </TabPanel>
    </Tabs>
  );
}
