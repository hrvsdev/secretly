import styled from "@emotion/styled";

import Hero from "../hero";
import Navbar from "../navbar";
import Secret from "../secret-input-section";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <Main>
        <Hero />
        <Secret />
      </Main>
    </>
  );
}

const Main = styled.main`min-height: 100vh`;
