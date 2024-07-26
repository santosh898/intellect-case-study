import { render } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  const { baseElement } = render(<App />);

  expect(baseElement).toBeTruthy();
});
