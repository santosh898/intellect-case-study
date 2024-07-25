import { useMemo, useState } from "react";

import { css } from "@emotion/react";
import { Bar, Container } from "./SignalLevel.styles";

export interface SignalLevelProps {
  min?: 0 | 1;
  levels?: number;
  disabled?: boolean;
}

export const SignalLevel = ({
  min = 1,
  levels = 5,
  disabled = false,
}: SignalLevelProps) => {
  const [level, setLevel] = useState<number>(min);

  //In Percentage
  const minWidth = 10;

  /*
    In Percentage
    Maximum amount of increment the bar can take
    This gives us the increment for each bar,
    so that width increment is evenly distributed until 100%.
    This will be mitigated for small number of levels in the next step.
  */
  const maxIncrement = (100 - minWidth) / levels;

  // All Calculations are done in reverse order for the ease of understanding
  const bars = useMemo(
    () =>
      new Array(levels)
        .fill(0)
        .map((_, index) =>
          index === 0
            ? minWidth // First bar takes the fixed smallest width
            : /*
                For smaller level count where bars doesn't have to
                occupy 100%, maxIncrement will be greater than minWidth.
                We will favour the minWidth here,
                so that even distribution happens among all bars.
              */
              minWidth + Math.min(maxIncrement, minWidth) * index
        )
        .reverse(),
    [levels, maxIncrement]
  );

  return (
    <Container>
      {bars.map((widthPercent, index) => {
        const value = levels - index;
        return (
          <Bar
            disabled={disabled}
            key={index}
            css={css`
              width: ${widthPercent}%;
              background-color: ${value <= level ? "#6EACDA" : "gray"};
            `}
            onClick={() => setLevel(value)}
          />
        );
      })}
    </Container>
  );
};
