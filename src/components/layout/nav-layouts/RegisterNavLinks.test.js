import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId } from "../../../utils/test-utils.js";

// component to be tested.
import RegisterNavLinks from "./RegisterNavLinks.js";

it("renders register-nav-component", () => {
  const { container } = render(<RegisterNavLinks />);

  const component = getAllByTestId(container, "register-nav-component");
  expect(component.length).toBe(1);
});
