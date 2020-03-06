import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId } from "./utils/test-utils.js";

// component to be tested.
import App from "./App.js";

//creating a mock function to test if GA initialization was called.
import reactGAinitialization from "./config/analytics.js";
jest.mock("./config/analytics.js");
reactGAinitialization.mockImplementation(() => () => null);

it("renders App component", () => {
  const { container } = render(<App />);

  const component = getAllByTestId(container, "App-component");
  expect(component.length).toBe(1);
});

it("calls reactGAinitialization once", () => {
  render(<App />);
  expect(reactGAinitialization).toBeCalled();
});
