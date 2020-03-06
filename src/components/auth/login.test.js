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

describe('login', () => {
  fireEvent.click(getAllByTestId ("BtnLoginTest"))
  expect(component.length).toBe(1);
  expect
})

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

  const component = getAllByTestId(container, "login");
  expect(component.length).toBe(1);

  it("calls onLogin when button clicked", () => {
    const mockSubmit = jest.fn();
  
    const component = enzyme.mount(
      <Provider store={store}>
        <Router>
          <Login onSubmit={mockSubmit} />
        </Router>
      </Provider>
    );
    console.log(component.html());
  
    component.find("#user_name").simulate('change', { target: { value: 'test_user' } })
    component.find("#password").simulate('change', { target: { value: 'test_password' } })
    component.find("form").simulate("submit");
  
    console.log("onClickMock.mock", mockSubmit.mock)
    expect(mockSubmit).toBeCalled()
  });
});





 