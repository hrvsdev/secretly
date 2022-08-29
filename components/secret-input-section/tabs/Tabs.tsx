import { Tabs, TabList, Tab, TabPanel } from "../../tab-layout";

import { TabsTypes } from "../types";

import TextareaInput from "../textarea";
import RedirectInput from "../redirect";

export default function TabsComp({ value, active }: TabsTypes): JSX.Element {
  return (
    <Tabs>
      <TabList>
        <Tab title="Text" id="text" active={active} />
        <Tab title="Redirect" id="redirect" active={active} />
      </TabList>
      <TabPanel id="text" active={active}>
        <TextareaInput value={value} />
      </TabPanel>
      <TabPanel id="redirect" active={active}>
        <RedirectInput value={value} />
      </TabPanel>
    </Tabs>
  );
}
