import React from 'react';
import { Provider } from "react-redux";
import { render, fireEvent } from '@testing-library/react';
import Login from './login';
import { getAllByTestId } from "../../utils/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import * as actions from "../../store/actions/loginAction";
export const FETCHING_USER_LOGIN = "FETCHING_USER_LOGIN"
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const store = createStore(
 (applyMiddleware)
);

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })


it('creates FETCHING_USER_LOGIN_SUCCESS when fetching login', () => {
  fetchMock.postOnce('/login', {
    body: { user_name: 'test', password:'123456' },
    headers: { 'content-type': 'application/json' }
  })

  const expectedActions = [
    { type: actions.FETCHING_USER_LOGIN ,  body: {  user_name: 'test', password:'123456' }},
    { type: actions.FETCHING_USER_LOGIN_SUCCESS }
  ]
  const store = mockStore({ user: [] })
  return store.dispatch(actions.loginAction.login('test', '123456')).then(() => {
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions)
  })
})
})

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
});





 