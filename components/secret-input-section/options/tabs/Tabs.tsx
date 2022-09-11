import { useState } from "@hookstate/core";

import TabLayout from "../../../tab-layout";
import Password from "../password";
import ReadReceipt from "../read-receipt";
import Delivery from "../delivery";

import { deliveryEmail, readReceiptEmail } from "../../store";

export default function Tabs() {
  // Active tab state
  const activeTab = useState("password");

  // Error states
  const deliveryError = useState(deliveryEmail.err);
  const readReceiptError = useState(readReceiptEmail.err);

  return (
    <TabLayout.Tabs>
      <TabLayout.List>
        <TabLayout.Tab title="Password" id="password" active={activeTab} />
        <TabLayout.Tab
          title="Read Receipt"
          id="receipt"
          active={activeTab}
          error={readReceiptError.value}
        />
        <TabLayout.Tab
          title="Delivery"
          id="delivery"
          active={activeTab}
          error={deliveryError.value}
        />
      </TabLayout.List>
      <TabLayout.Panel id="password" active={activeTab}>
        <Password />
      </TabLayout.Panel>
      <TabLayout.Panel id="receipt" active={activeTab}>
        <ReadReceipt />
      </TabLayout.Panel>
      <TabLayout.Panel id="delivery" active={activeTab}>
        <Delivery />
      </TabLayout.Panel>
    </TabLayout.Tabs>
  );
}
