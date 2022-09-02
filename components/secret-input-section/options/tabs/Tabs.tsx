import { useState } from "@hookstate/core";

import TabLayout from "../../../tab-layout";
import Password from "../password";

export default function Tabs() {
  // Active tab state
  const activeTab = useState("password");

  return (
    <TabLayout.Tabs>
      <TabLayout.List>
        <TabLayout.Tab title="Password" id="password" active={activeTab} />
        <TabLayout.Tab title="Read Receipt" id="receipt" active={activeTab} />
        <TabLayout.Tab title="Delivery" id="delivery" active={activeTab} />
      </TabLayout.List>
      <TabLayout.Panel id="password" active={activeTab}>
        <Password />
      </TabLayout.Panel>
      <TabLayout.Panel id="receipt" active={activeTab}>
        Read Receipt
      </TabLayout.Panel>
      <TabLayout.Panel id="delivery" active={activeTab}>
        Delivery
      </TabLayout.Panel>
    </TabLayout.Tabs>
  );
}
