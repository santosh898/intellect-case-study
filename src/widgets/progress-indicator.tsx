import { useState } from "react";
import styled from "@emotion/styled";
import { RangeInput } from "../components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CircularDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const DottedContainer = styled(CircularDiv)<{
  percentage?: number;
}>`
  width: 14em;
  height: 14em;
  padding: 1.5em;
  position: relative;
  border-radius: 50%;
  margin: 4em;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: -1;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='50%25' ry='50%25' stroke='%236eacda' stroke-width='5' stroke-dasharray='7%25%2c 5%25' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
    transform: ${({ percentage = 0 }) => `rotate(${percentage}deg)`};
  }
`;

const Progress = styled(CircularDiv)<{ percentage?: number }>`
  padding: 0.25em;
  background: ${({ percentage = 0 }) =>
    `conic-gradient(white 0% ${percentage}%, transparent ${percentage}% 100%)`};
`;

const CircularContainer = styled(CircularDiv)`
  padding: 1.25em;
  background-color: #03346e;
`;

const InnerCircle = styled(CircularDiv)`
  background-color: #6eacda;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressValue = styled.p`
  font-size: 4em;
  font-weight: bold;
  color: #021526;
`;

export interface ProgressIndicatorProps {
  range?: {
    min: number;
    max: number;
  };
}

export const ProgressIndicator = ({
  range = { min: 0, max: 10 },
}: ProgressIndicatorProps) => {
  const [value, setValue] = useState(range.min);

  return (
    <Container>
      <DottedContainer percentage={(value / range.max) * 100}>
        <Progress percentage={(value / range.max) * 100}>
          <CircularContainer>
            <InnerCircle>
              <ProgressValue>{value}</ProgressValue>
            </InnerCircle>
          </CircularContainer>
        </Progress>
      </DottedContainer>

      <RangeInput
        min={range.min}
        max={range.max}
        step={1}
        value={value}
        onValueChange={setValue}
      />
    </Container>
  );
};
