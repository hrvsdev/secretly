import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import TabLayout from "../../../tab-layout";

import type { TopTypes } from "../types";

export default function Top({ isVisible }: TopTypes): JSX.Element {
  const activeTab = useState("password");

  return (
    <TopStyled visible={isVisible}>
      <TabLayout.Tabs>
        <TabLayout.List>
          <TabLayout.Tab title="Password" id="password" active={activeTab} />
          <TabLayout.Tab title="Read Receipt" id="receipt" active={activeTab} />
          <TabLayout.Tab title="Delivery" id="delivery" active={activeTab} />
          <TabLayout.Tab title="Message" id="message" active={activeTab} />
        </TabLayout.List>
        <TabLayout.Panel id="password" active={activeTab}>
          Password
        </TabLayout.Panel>
        <TabLayout.Panel id="receipt" active={activeTab}>
          Read Receipt
        </TabLayout.Panel>
        <TabLayout.Panel id="delivery" active={activeTab}>
          Delivery
        </TabLayout.Panel>
      </TabLayout.Tabs>
    </TopStyled>
  );
}

const TopStyled = styled.div<{ visible: boolean }>`
  color: white;
  overflow: hidden;
  /* transition: max-height 500ms; */
  max-height: ${({ visible }) => (visible ? "500px" : "0")};
`;
