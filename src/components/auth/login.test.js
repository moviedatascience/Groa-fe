import React from 'react';
import { Provider } from "react-redux";
import { render, fireEvent } from '@testing-library/react';
import Login from './login';
import { getAllByTestId } from "../../utils/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";

const store = createStore(
 (applyMiddleware)
);

it("renders login component", () => {
  const { container } = render(
    <Provider store={store}>
    <Router>
      <Login />
    </Router>
    </Provider>
  );
  const component = getAllByTestId(container, "login-component");
  expect(component.length).toBe(1);
});

describe('Button', () => {
  it('should be defined', () => {
    expect(Login).toBeDefined();
  });
})

it("renders errors to login on Click if info not filled out", () => {
  const { container } = render(<Login />);

  let link = getAllByTestId(container, "BtnLoginTest");
  expect(link.length).toBe(1);
  fireEvent.click(getByTestId(container, "BtnLoginTest"))

  let component = getAllByTestId(container, "login-component");
  expect(component.length).toBe(1);  
});