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

describe('Button', () => {
  it('should be defined', () => {
    expect(Login).toBeDefined();
  });
})

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