import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { getAllByTestId } from "../../utils/test-utils.js";

// component to be tested.
import Dashboardv1 from "./Dashboardv1.js";
import { createMemoryHistory } from "history";

it("renders dashboardv1 if there is a history object", () => {
  let history = createMemoryHistory();
  const route = "/dashboard";
  let userid = 2394572390487239458732957324985723497;
  history.push(route, { userid: userid });

  const { container } = render(
    <Router history={history}>
      <Dashboardv1 />
    </Router>
  );

  const component = getAllByTestId(container, "dashboard-screen");
  expect(component.length).toBe(1);
});
