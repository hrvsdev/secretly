import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import Tabs from "../tabs";

import type { TopTypes } from "../types";

export default function Top({ isVisible }: TopTypes): JSX.Element {
  return (
    <TopStyled visible={isVisible}>
      <Tabs />
    </TopStyled>
  );
}

const TopStyled = styled.div<{ visible: boolean }>`
  color: white;
  overflow: hidden;
  /* transition: max-height 500ms; */
  max-height: ${({ visible }) => (visible ? "500px" : "0")};
`;
