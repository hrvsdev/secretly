import styled from "@emotion/styled";

import Hero from "../hero";
import Secret from "../secret-input-section";

import { useHero } from "../hero/store";

export default function Home(): JSX.Element {
  // Hero props state
  const hero = useHero();

  // Setting hero props
  hero.set({
    heading: "Share a secret",
    para: "The secret is end-to-end encrypted and can only be viewed once via a link.",
  });

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
