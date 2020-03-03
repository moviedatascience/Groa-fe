import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId } from "../../utils/test-utils.js";


// component to be tested.
import Navigation from "./navigation.js";

it("renders a navigation bar in the dashboard", () => {
  const { container } = render (<Navigation />);

  const component = getAllByTestId(container, "navigation");
  expect(component.length).toBe(0);
});