import React from "react";
import { render } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import { getAllByTestId } from "../../utils/test-utils.js";

// component to be tested.
import Dashboardv1 from "./Dashboardv1.js";
import { createMemoryHistory } from "history";

it("renders dashboardv1 component on the path '/:userid/recommendations", () => {
  let userid = 2394572390487239458732957324985723497;
  const route = `/${userid}/recommended`;
  let history = createMemoryHistory({ initialEntries: [route] });

  const { container } = render(
    <Router history={history}>
      <Route path={route} component={Dashboardv1} />
    </Router>
  );

  const component = getAllByTestId(container, "dashboard-screen");
  expect(component.length).toBe(1);
});
