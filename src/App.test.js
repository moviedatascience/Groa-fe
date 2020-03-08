import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from "@testing-library/react";
import { getByTestId, getAllByTestId } from "./utils/test-utils.js";



// component to be tested.
import App from "./App.js";
import Login from "../src/components/auth/login";

//creating a mock function to test if GA initialization was called.
import reactGAinitialization from "./config/analytics.js";
import login from "../src/components/auth/login";

jest.mock("./config/analytics.js");
reactGAinitialization.mockImplementation(() => () => null);

it("calls reactGAinitialization once", () => {
  render(<App />);
  expect(reactGAinitialization).toBeCalled();
});

it("renders App component, register component and register navigation component", () => {
  const { container } = render(<App />);

  let component = getAllByTestId(container, "App-component");
  expect(component.length).toBe(1);

  component = getAllByTestId(container, "register-component");
  expect(component.length).toBe(1);

  component = getAllByTestId(container, "register-nav-component");
  expect(component.length).toBe(1);
});

it("renders link to login which onClick renders login component", () => {
  const { container } = render(<App />);

  let link = getAllByTestId(container, "login-link");
  expect(link.length).toBe(1);
  fireEvent.click(getByTestId(container, "login-link"))

  let component = getAllByTestId(container, "login-component");
  expect(component.length).toBe(1);  
});