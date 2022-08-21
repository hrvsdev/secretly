import styled from "@emotion/styled";

export default function Hero(): JSX.Element {
  return (
    <HeroWrapper>
      <Heading>Share a secret</Heading>
      <Para>The secret is end-to-end encrypted and can only be viewed once via a link.</Para>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  margin: 40px auto 50px;
  max-width: 800px;
  width: 100%;
  padding: 0 20px;
`;

const Heading = styled.h1`
  font-size: 4.6rem;
  margin-bottom: 10px;
  text-align: center;
`;

const Para = styled.p`
  font-size: 1.67rem;
  color: #5a6064;
  text-align: center;
`;
