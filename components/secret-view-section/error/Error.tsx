import styled from "@emotion/styled";

export default function Error(): JSX.Element {
  return <ErrorWrapper>Error</ErrorWrapper>;

}

const ErrorWrapper = styled.div`
  height: 60px;
  display: flex;
    justify-content: center;
    color: white;
    margin-bottom: 50px;
`;
