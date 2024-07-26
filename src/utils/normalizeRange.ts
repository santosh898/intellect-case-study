export const normalizeRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return Math.round(
    ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
  );
};
