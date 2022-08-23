import styled from "@emotion/styled";

function Views(): JSX.Element {
  return (
    <ViewsWrapper>
      <Label>Views after link with be deleted</Label>
      <Select>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
        <Option>4</Option>
        <Option>5</Option>
        <Option>10</Option>
        <Option>20</Option>
        <Option>50</Option>
        <Option>100</Option>
        <Option>200</Option>
        <Option>500</Option>
        <Option>Unlimited</Option>
      </Select>
    </ViewsWrapper>
  );
}
function Time(): JSX.Element {
  return (
    <TimeWrapper>
      <Label>Time after link will be deleted regardless of views</Label>
      <Select>
        <Option>Unlimited</Option>
        <Option>1 minute</Option>
        <Option>2 minutes</Option>
        <Option>5 minutes</Option>
        <Option>10 minutes</Option>
        <Option>30 minutes</Option>
        <Option>1 hour</Option>
        <Option>24 hours</Option>
        <Option>1 week</Option>
        <Option>1 month</Option>
        <Option>1 year</Option>
      </Select>
    </TimeWrapper>
  );
}

export default function SelectComp(): JSX.Element {
  return (
    <SelectBoxWrapper>
      <Views />
      <Time />
    </SelectBoxWrapper>
  );
}
const SelectBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ViewsWrapper = styled.div``;
const TimeWrapper = styled.div``;

const Select = styled.select``;
const Option = styled.option``;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: white;
  padding-left: 6px;
  font-weight: 300;
`;
