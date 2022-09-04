import styled from "@emotion/styled";
import Button from "../../button";

export default function ViewButton() {
  return (
    <ViewButtonWrapper>
      <Button onClick={onShowSecret} isLoading={isLoading}>
        View Secret
      </Button>
    </ViewButtonWrapper>
  );
}

const ViewButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;