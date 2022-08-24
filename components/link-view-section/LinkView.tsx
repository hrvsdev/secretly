import styled from "@emotion/styled";
import CopyButton from "../copy-button";

export default function LinkView() {
  return (
    <LinkWrapper show={true}>
        <Link>{""}</Link>
        <ButtonsWrapper>
          <CopyButton text={"gc vbnm"} />
        </ButtonsWrapper>
      </LinkWrapper>
  )
}


const LinkWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  max-width: 800px;
  margin: auto;
  transition: all 200ms;
  transition-delay: 100ms;
`;

const Link = styled.div`
  border-radius: 10px;
  min-height: 100px;
  width: 100%;
  padding: 20px;
  background: hsla(0, 0%, 0%, 0.3);
  color: white;
  margin-bottom: 15px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
