import { memo } from "react";

import { normalizeRange } from "@/utils";
import { LevelText } from "./SignalLevel.styles";

const LevelLabel = ({
  level,
  totalLevels,
}: {
  level: number;
  totalLevels: number;
}) => {
  const levelLabels = ["Very Low", "Low", "Medium", "High", "Very High"];

  return (
    <LevelText>
      {
        levelLabels[
          normalizeRange(level, 0, totalLevels, 0, levelLabels.length) - 1
        ]
      }
    </LevelText>
  );
};

export default memo(LevelLabel);
