import styled from "@emotion/styled";

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
  display: ${({ visible }) => (visible ? "block" : "none")};
`;
