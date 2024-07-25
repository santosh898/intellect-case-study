import { useState } from "react";
import { RangeInput } from "@/components";
import {
  CircularContainer,
  Container,
  DottedContainer,
  InnerCircle,
  Progress,
  ProgressValue,
} from "./ProgressIndicator.styles";

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

  const percentage = (value / range.max) * 100;

  return (
    <Container>
      <DottedContainer percentage={percentage}>
        <Progress percentage={percentage}>
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
