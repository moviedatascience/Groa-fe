import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import { getByTestId, getAllByTestId } from "./utils/test-utils.js";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

// component to be tested.
import App from "./App.js";
import Register from "./components/auth/Register.js";
import Login from "./components/auth/login.js";

//creating a mock function to test if GA initialization was called.
import reactGAinitialization from "./config/analytics.js";

// redux testing
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

jest.mock("./config/analytics.js");
reactGAinitialization.mockImplementation(() => () => null);

it("calls reactGAinitialization once", () => {
  render(<App />);
  expect(reactGAinitialization).toBeCalled();
});

it("renders register component and register navigation component when the route is directed to '/register'", () => {
  let history = createMemoryHistory();
  history.push("/register");
  const { container } = render(
    <Router history={history}>
      <Register />
    </Router>
  );

  let component = getAllByTestId(container, "register-component");
  expect(component.length).toBe(1);

  component = getAllByTestId(container, "register-nav-component");
  expect(component.length).toBe(1);
});

describe("login component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      myState: "sample test"
    });
  });
  it("renders Login component when the application route is directed to '/login'", () => {
    let history = createMemoryHistory();
    history.push("/login");
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Login />
        </Router>
      </Provider>
    );

    let link = getAllByTestId(container, "BtnLoginTest");
    expect(link.length).toBe(1);
    fireEvent.click(getByTestId(container, "BtnLoginTest"));

    let component = getAllByTestId(container, "login-component");
    expect(component.length).toBe(1);
  });
});

// test became obsolte  when I changed the Groa link to go to /:userid/recommended
it("renders navigation and recommendation components when pathname is '/:userid/recommended and a token is in localStorage", () => {
  let history = createMemoryHistory();
  let userid = 6485746;
  history.push(`/${userid}/recommended`);
  localStorage.setItem("token", "randomtestword");

  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  console.log(window.location.pathname);
  let component = getAllByTestId(container, "navigation");
  expect(component.length).toBe(1);

  component = getAllByTestId(container, "dashboard-screen");
  expect(component.length).toBe(1);
});
