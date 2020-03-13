import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId } from "../../utils/test-utils.js";
import { BrowserRouter as Router } from "react-router-dom";
// component to be tested.
import Recommendations from "./Recommendations.js";

it("renders Recommendations with array has length.", async () => {
  const fakeRecommendations = [
    { Title: "The Godfather", Year: "1972" },
    { Title: "The Wizard of Oz", Year: "1939" },
    { Title: "Citizen Kane", Year: "1941" }
  ];

  const { container } = render(
    <Router>
      <Recommendations initialState={fakeRecommendations} />
    </Router>
  );

  let component = getAllByTestId(container, "recommendations-component");
  expect(component.length).toBe(1);
});

it("renders LoadingScreen when recommendations array is empty", () => {
  const { container } = render(
    <Router>
      <Recommendations />
    </Router>
  );

  let component = getAllByTestId(container, "loading-screen-component");
  expect(component.length).toBe(1);
});
