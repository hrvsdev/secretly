import styled from "@emotion/styled";

import Button from "../../button";

import type { ViewButtonTypes } from "./types";

export default function ViewButton(props: ViewButtonTypes): JSX.Element {
  return (
    <ViewButtonWrapper>
      <Button onClick={props.onClick} isLoading={props.isLoading}>
        View Secret
      </Button>
    </ViewButtonWrapper>
  );
}

const ViewButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
`;
