import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { getAllByTestId } from "../../utils/test-utils.js";

// component to be tested.
import Navigation from "./navigation.js";

it("renders navigation component", () => {
  const { container } = render(
    <Router>
      <Navigation />
    </Router>
  );

  // the uri when this component renders is "/" so it'll go to the RegisterNavLinks component
  const component = getAllByTestId(container, "navigation");
  expect(component.length).toBe(1);
});
