import { useEffect, useMemo, useState } from "react";

import { svgBars, svgTriangle } from "@/assets/signalLevelSVGs";
import { normalizeRange } from "@/utils";

import { Container } from "./SignalLevel.styles";
import { SignalLevelProps } from "./types";
import LevelLabel from "./LevelLabel";
import { useTheme } from "@emotion/react";

export const SignalLevel = ({
  value,
  levels = 5,
  onValueChange,
}: SignalLevelProps) => {
  const [level, setLevel] = useState<number>(value ? value : 1);

  const theme = useTheme();

  useEffect(() => {
    if (!value) return;
    setLevel(value);
  }, [value]);

  useEffect(() => {
    onValueChange?.(level);
  }, [level, onValueChange]);

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
        .map((_, index) => {
          if (index === 0)
            return {
              widthPercent: minWidth,
              ...svgTriangle,
            };

          const correctedBarIndex = normalizeRange(index, 1, levels - 1, 0, 3);

          return {
            /*
                For smaller level count where bars doesn't have to
                occupy 100%, maxIncrement will be greater than minWidth.
                We will favour the minWidth here,
                so that even distribution happens among all bars.
            */
            widthPercent: minWidth + Math.min(maxIncrement, minWidth) * index,
            ...svgBars[correctedBarIndex],
          };
        })
        .reverse(),
    [levels, maxIncrement]
  );

  return (
    <Container>
      <LevelLabel level={level} totalLevels={levels} />

      {bars.map(({ widthPercent, viewBox, path }, index) => {
        const value = levels - index;

        return (
          <svg
            width={`${widthPercent}%`}
            height="40px"
            preserveAspectRatio="none"
            viewBox={viewBox}
            key={index}
            fill={`${value <= level ? theme.colors.text : "gray"}`}
            onClick={() => setLevel(value)}
            style={{ cursor: "pointer" }}
            role="button"
          >
            <path d={path} />
          </svg>
        );
      })}
    </Container>
  );
};
