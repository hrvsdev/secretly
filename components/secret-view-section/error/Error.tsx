import styled from "@emotion/styled";

import { BiErrorCircle } from "react-icons/bi";

export default function Error({ show }: { show: boolean }): JSX.Element {
  return (
    <Section>
      <ErrorWrapper show={show}>
        <Icon>
          <BiErrorCircle />
        </Icon>
        <Text>This secret is unavailable.</Text>
      </ErrorWrapper>
    </Section>
  );
}

const Section = styled.div`
  margin: auto;
  padding: 0 20px;
  max-width: 800px;
`;

const ErrorWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  margin-bottom: 50px;
  width: 100%;
  min-height: 60px;
  padding: 15px 20px;
  border-radius: 10px;
  color: rgb(255, 8, 0);
  border: 1px solid rgb(255, 8, 0);
  background-color: rgba(255, 8, 0, 0.1);
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Text = styled.p``;
