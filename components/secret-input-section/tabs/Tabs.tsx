import TabLayout from "../../tab-layout";
import TextareaInput from "../textarea";
import RedirectInput from "../redirect";

import type { TabsTypes } from "../types";

export default function TabsComp(props: TabsTypes): JSX.Element {
  // Props destructuring
  const { value, active } = props;

  return (
    <TabLayout.Tabs>
      <TabLayout.List>
        <TabLayout.Tab title="Text" id="text" active={active} />
        <TabLayout.Tab title="Redirect" id="redirect" active={active} />
      </TabLayout.List>
      <TabLayout.Panel id="text" active={active}>
        <TextareaInput value={value} />
      </TabLayout.Panel>
      <TabLayout.Panel id="redirect" active={active}>
        <RedirectInput value={value} />
      </TabLayout.Panel>
    </TabLayout.Tabs>
  );
}
