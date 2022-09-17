import styled from "@emotion/styled";
import { useEffect } from "react";

import Hero from "../hero";
import Secret from "../secret-input-section";

import { useHero } from "../hero/store";

export default function Home(): JSX.Element {
  // Hero props state
  const hero = useHero();

  // Setting hero props on startup
  useEffect(() => {
    hero.set({
      heading: "Here is a secret",
      para: "Click the button below to view the secret. Copy it as it will be deleted instantly.",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Main>
      <Hero />
      <Secret />
    </Main>
  );
}

const Main = styled.main`
  min-height: calc(100vh + 1px);
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto;
`;
