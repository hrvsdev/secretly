import styled from "@emotion/styled";

export default function Tabs() {
  return (
    <TabsWrapper>
      <Header>
        <Button active={true}>Password</Button>
        <Button>Message</Button>
        <Button>Read Reciept</Button>
        <Button>Delivery</Button>
      </Header>
    </TabsWrapper>
  );
}

const TabsWrapper = styled.div`
  color: white;
  margin-bottom: 20px;
`;

const Header = styled.div`
  height: 50px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: row;
`;

const Button = styled.div<{ active?: true }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: -2px;
  padding: 0 16px;
  cursor: pointer;
  color: ${({ active }) => active && "#0072f5"};
  border-bottom: ${({ active }) => active && "2px solid currentcolor"};
`;

const Content = styled.div``;
