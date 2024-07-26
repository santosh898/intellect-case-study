import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SignalLevel } from "@/widgets";

test("renders with default level and responds to clicks", () => {
  const handleValueChange = vi.fn();

  render(
    <SignalLevel value={2} levels={5} onValueChange={handleValueChange} />
  );

  // Verify initial level
  expect(screen.getByText("Low")).toBeInTheDocument();

  // Verify SVGs
  const svgElements = screen.getAllByRole("button");
  expect(svgElements).toHaveLength(5);

  // Click on the third level
  fireEvent.click(svgElements[2]);

  // Verify level after click
  expect(screen.getByText("Medium")).toBeInTheDocument();
  expect(handleValueChange).toHaveBeenCalledWith(3);
});

test("updates when the value prop changes", () => {
  const { rerender } = render(<SignalLevel value={1} levels={5} />);

  // Verify initial level
  expect(screen.getByText("Very Low")).toBeInTheDocument();

  // Update value prop
  rerender(<SignalLevel value={2} levels={5} />);

  // Verify updated level
  expect(screen.getByText("Low")).toBeInTheDocument();
});
