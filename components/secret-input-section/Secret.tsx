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

const Textarea = styled.textarea``;

const Button = styled.button``;
