import styled from "@emotion/styled";

import Hero from "../hero";
import Navbar from "../navbar";
import Secret from "../secret-input-section";

export default function Home(): JSX.Element {
  return (
    <Main>
      <Navbar />
      <Hero />
      <Secret />
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  max-width: 900px;
  margin: auto;
`;
