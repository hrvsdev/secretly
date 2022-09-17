import styled from "@emotion/styled";

import { type HeroTypes } from "./types";

export default function Hero({heading, para}: HeroTypes): JSX.Element {
  return (
    <HeroWrapper>
      <Heading>{heading}</Heading>
      <Para>{para}</Para>
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

Hero.defaultProps = {
  heading: "Share a secret",
  para: "The secret is end-to-end encrypted and can only be viewed once via a link.",
};
