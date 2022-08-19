import styled from "@emotion/styled";

export default function Secret(): JSX.Element {
  return (
    <SecretWrapper>
      <Textarea placeholder="What's on your mind!" />
      <Button>Get Link</Button>
    </SecretWrapper>
  );
}

const SecretWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Textarea = styled.textarea`
  margin-bottom: 1.5rem;
  height: 10rem;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: fit-content;
  font-size: 1rem;
  padding: 5px 10px;
  outline: 0;
  cursor: pointer;
`;
