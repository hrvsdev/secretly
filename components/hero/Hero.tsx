import styled from "@emotion/styled";

import { useHero } from "./store";

export default function Hero(): JSX.Element {
  const hero = useHero();

  return (
    <HeroWrapper>
      <Heading>{hero.heading.value}</Heading>
      <Para>{hero.para.value}</Para>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  width: 100%;
  padding-top: 70px;
  margin-bottom: 70px;

  @media (max-width: 600px) {
    padding-top: 40px;
    margin-bottom: 40px;
  }
`;

const Heading = styled.h1`
  font-size: 4.6rem;
  margin-bottom: 10px;
  text-align: center;
  color: white;

  @media (max-width: 600px) {
    font-size: 2.1rem;
    text-align: left;
  }
`;

const Para = styled.p`
  font-size: 1.67rem;
  color: #d9d9d9;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    text-align: left;
  }
`;
