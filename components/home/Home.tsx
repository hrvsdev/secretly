import styled from "@emotion/styled";

import Hero from "../hero";
import Secret from "../secret-input-section";

export default function Home(): JSX.Element {
  return (
    <Main>
      <Hero />
      <Secret />
    </Main>
  );
}

const Main = styled.main`
  min-height: calc(100vh + 1px);
`;
