import styled from "@emotion/styled";
import { useState } from "@hookstate/core";

import { BiAt } from "react-icons/bi";

import { deliveryEmail } from "../../store";

export default function Delivery(): JSX.Element {
  // Input value state
  const email = useState(deliveryEmail);

  // Input change action
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    email.val.set(e.target.value);
  };

  return (
    <PasswordWrapper>
      <Heading>Deliver secret on email</Heading>
      <InputWrapper>
        <AtIcon size={22} />
        <Input
          type="email"
          value={email.val.value}
          onChange={onChange}
          placeholder="username@email.com"
        />
      </InputWrapper>
      <Info>
        <p>
          We can deliver the secret for you on email free of cost and hassle-free. This email is
          never saved to our database and just forgotten after you create a secret.
        </p>
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
  margin-bottom: 25px;
`;

const AtIcon = styled(BiAt)`
  position: absolute;
  left: 20px;
`;

const Input = styled.input`
  all: unset;
  cursor: initial;
  box-sizing: border-box;
  width: 100%;
  background: hsla(0, 0%, 0%, 0.3);
  border-radius: 10px;
  height: 54px;
  padding: 0 20px 0 55px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  font-size: 15px;
  padding-left: 8px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 25px;
`;
