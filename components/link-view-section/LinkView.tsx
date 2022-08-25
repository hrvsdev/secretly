import styled from "@emotion/styled";

import CopyButton from "../copy-button";

import { LinkViewType } from "./types";

export default function LinkView(props: LinkViewType): JSX.Element {
  const { link, isLinkShown } = props;
  return (
    <LinkWrapper show={isLinkShown}>
      <Link>
        <Text>{link}</Text>
      </Link>
      <ButtonsWrapper>
        <CopyButton text={link} />
      </ButtonsWrapper>
    </LinkWrapper>
  );
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
`;
