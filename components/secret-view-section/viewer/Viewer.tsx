import styled from "@emotion/styled";
import { useRouter } from "next/router";

import CopyButton from "../../copy-button";
import SecButton from "../../sec-button";

export default function Viewer({ secret }: { secret: string }): JSX.Element {
  // Router hook
  const router = useRouter();

  // Reply button action
  const onReply = () => {
    router.push("/");
  };

  return (
    <SecretWrapper>
      <Secret>{secret}</Secret>
      <ButtonsWrapper>
        <SecButton onClick={onReply}>Reply with a secret</SecButton>
        <CopyButton text={secret} />
      </ButtonsWrapper>
    </SecretWrapper>
  );
}

const SecretWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 200ms;
  transition-delay: 100ms;
`;

const Secret = styled.div`
  border-radius: 10px;
  min-height: 100px;
  width: 100%;
  padding: 20px;
  background: hsla(0, 0%, 0%, 0.3);
  color: white;
  word-break: break-all;
  line-height: 25px;
  margin-bottom: 15px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 15px;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    row-gap: 15px;
  }
`;
