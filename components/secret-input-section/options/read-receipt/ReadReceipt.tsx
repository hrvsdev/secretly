import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import { BiAt } from "react-icons/bi";
import { When } from "react-if";

import { readReceiptEmail } from "../../store";

export default function Delivery(): JSX.Element {
  // Input value state
  const email = useState(readReceiptEmail);

  // Input events action
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    email.val.set(e.target.value);
  };

  return (
    <PasswordWrapper>
      <Heading>Read receipt on email</Heading>
      <InputWrapper>
        <AtIcon size={22} />
        <Input
          type="email"
          isError={email.err.get()}
          value={email.val.get()}
          onChange={onChange}
          placeholder="username@email.com"
        />
      </InputWrapper>
      <When condition={email.err.get()}>
        <Error>Entered email is invalid. Remove it or make it valid.</Error>
      </When>
      <Info>
        <p>Whenever the secret is revealed, we will inform you by the selected method. The <b>SECRET ID</b> is used to inform you about the secret.</p>
        <p>Don&apos;t worry, we will never send you spam or promotional mails.</p>
      </Info>
    </PasswordWrapper>
  );
}

const PasswordWrapper = styled.div`
  margin: 25px 0 50px;
`;

const Heading = styled.h2`
  padding-left: 8px;
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const AtIcon = styled(BiAt)`
  position: absolute;
  left: 20px;
`;

const Input = styled.input<{ isError?: boolean }>`
  all: unset;
  cursor: initial;
  box-sizing: border-box;
  width: 100%;
  background: hsla(0, 0%, 0%, 0.3);
  border-radius: 10px;
  height: 54px;
  padding: 0 20px 0 55px;
  border: ${({ isError }) => (isError ? "1px solid rgb(255, 8, 0)" : "none")};
`;

const Error = styled.p`
  margin-top: 5px;
  padding-left: 8px;
  font-weight: 300;
  color: rgb(255, 8, 0);
  font-size: 13px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 25px;
  font-size: 15px;
  padding-left: 8px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 25px;
`;
