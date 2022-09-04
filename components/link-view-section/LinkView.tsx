import styled from "@emotion/styled";

import CopyButton from "../copy-button";
import SecButton from "../sec-button";

import type { LinkViewType } from "./types";

export default function LinkView(props: LinkViewType): JSX.Element {
  const { link, isLinkShown, onCreateNew } = props;
  return (
    <LinkWrapper show={isLinkShown}>
      <Link>
        <Text>{link}</Text>
      </Link>
      <ButtonsWrapper>
        <SecButton onClick={onCreateNew}>Create New</SecButton>
        <CopyButton text={link} />
      </ButtonsWrapper>
    </LinkWrapper>
  );
}

const LinkWrapper = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
`;

const Link = styled.div`
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  background: hsla(0, 0%, 0%, 0.3);
  color: white;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 20px;
  overflow-x: scroll;
  height: 100%;
  scrollbar-width: none;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
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