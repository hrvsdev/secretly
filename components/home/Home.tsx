import styled from "@emotion/styled";

import Secret from "../secret-input-section";

export default function Home(): JSX.Element {
  return (
    <Main>
      <Secret />
    </Main>
  );
}

const Main = styled.main`
  padding: 2rem;
`;
