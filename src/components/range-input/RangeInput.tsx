import { forwardRef, useEffect, useState } from "react";
import { StyledInput } from "./RangeInput.styles";

export interface RangeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: number;
  value?: number;
  onValueChange?: (v: number) => void;
  min: number;
  max: number;
}

export const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
  ({ value, onValueChange, min, max, defaultValue = 0, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(
      value !== undefined ? value : defaultValue ?? 0
    );

    useEffect(() => {
      if (value === undefined) return;
      setInternalValue(value);
    }, [value]);

    return (
      <StyledInput
        ref={ref}
        {...props}
        type="range"
        value={internalValue}
        onChange={(e) => {
          setInternalValue(Number(e.target.value));
          onValueChange?.(Number(e.target.value));
        }}
        min={min}
        max={max}
        percentage={((internalValue - min) / (max - min)) * 100}
      />
    );
  }
);
