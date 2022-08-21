import styled from "@emotion/styled";

export default function Text(): JSX.Element {
  return (
    <>
      <Heading></Heading>
      <Para></Para>
    </>
  );
}

const Heading = styled.h2`
  color: white;
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 8px;
`;

const Para = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;
