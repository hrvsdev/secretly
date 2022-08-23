import styled from "@emotion/styled";

interface PropsTypes {
  heading: string;
  para: string;
}

export default function Hero(props: PropsTypes): JSX.Element {
  return (
    <HeroWrapper>
      <Heading>{props.heading}</Heading>
      <Para>{props.para}</Para>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  margin: 0 auto 50px;
  max-width: 800px;
  width: 100%;
  padding: 70px 20px 0;
`;

const Heading = styled.h1`
  font-size: 4.6rem;
  margin-bottom: 10px;
  text-align: center;
  color: white;
`;

const Para = styled.p`
  font-size: 1.67rem;
  color: #d9d9d9;
  text-align: center;
`;

Hero.defaultProps = {
  heading: "Share a secret",
  para: "The secret is end-to-end encrypted and can only be viewed once via a link."
}