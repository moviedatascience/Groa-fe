import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId } from "../../utils/test-utils.js";
import { BrowserRouter as Router } from "react-router-dom";

// component to be tested.
import Dashboardv1 from "./Dashboardv1.js";

it("renders dashboardv1", () => {
  const { container } = render(
    <Router>
      <Dashboardv1 />
    </Router>
  );

  // currently have it set up so that if there is no user id it goes to loading screen.
  // should change to login or a 403 or some thing else.
  const component = getAllByTestId(container, "loading-screen");
  expect(component.length).toBe(1);
});
