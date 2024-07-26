import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SignalLevelLite } from "@/widgets";

test("renders with default level and responds to clicks", () => {
  const handleValueChange = vi.fn();

  render(
    <SignalLevelLite value={2} levels={5} onValueChange={handleValueChange} />
  );

  expect(screen.getByText("Low")).toBeInTheDocument();

  const bars = screen.getAllByRole("button");
  expect(bars).toHaveLength(5);

  fireEvent.click(bars[2]);

  expect(screen.getByText("Medium")).toBeInTheDocument();
  expect(handleValueChange).toHaveBeenCalledWith(3);
});

test("updates when the value prop changes", () => {
  const { rerender } = render(<SignalLevelLite value={2} levels={10} />);

  expect(screen.getByText("Very Low")).toBeInTheDocument();

  rerender(<SignalLevelLite value={6} levels={10} />);

  expect(screen.getByText("Medium")).toBeInTheDocument();
});

test("does not change level when disabled", () => {
  const handleValueChange = vi.fn();

  render(
    <SignalLevelLite
      value={2}
      levels={5}
      disabled
      onValueChange={handleValueChange}
    />
  );

  expect(screen.getByText("Low")).toBeInTheDocument();

  const bars = screen.getAllByRole("button");
  expect(bars).toHaveLength(5);

  fireEvent.click(bars[2]);

  expect(screen.getByText("Low")).toBeInTheDocument();
  expect(handleValueChange).not.toHaveBeenCalledWith(3);
});
