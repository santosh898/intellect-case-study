export interface SignalLevelProps {
  value?: number;
  onValueChange?: (value: number) => void;
  levels?: number;
  disabled?: boolean;
}
