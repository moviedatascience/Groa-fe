import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId } from "../../utils/test-utils.js";

// component to be tested.
import LoadingScreen from "./LoadingScreen.js";

it("renders loading screen and displays a movie quote in a paragraph", () => {
  const { container } = render(<LoadingScreen />);

  const component = getAllByTestId(container, "loading-screen");
  expect(component.length).toBe(1);
});
