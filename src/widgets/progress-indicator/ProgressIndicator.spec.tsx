import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ProgressIndicator } from "@/widgets/progress-indicator";

test("renders with default range and initial value", () => {
  render(<ProgressIndicator />);

  expect(screen.getByText("0")).toBeInTheDocument();

  const rangeInput = screen.getByRole("slider");
  expect(rangeInput).toHaveAttribute("min", "0");
  expect(rangeInput).toHaveAttribute("max", "10");
  expect(rangeInput).toHaveValue("0");
});

test("updates progress value when range input changes", () => {
  const { getByRole, getByText } = render(
    <ProgressIndicator range={{ min: 0, max: 20 }} />
  );

  const rangeInput = getByRole("slider");

  fireEvent.change(rangeInput, { target: { value: "10" } });

  expect(getByText("10")).toBeInTheDocument();
});
