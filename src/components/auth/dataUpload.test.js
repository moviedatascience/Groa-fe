import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Router, Route } from "react-router-dom";
import {
  getAllByTestId,
  getAllByText,
  getByTestId
} from "../../utils/test-utils.js";
import { createMemoryHistory } from "history";

// component to be tested.
import DataUpload from "./dataUpload.js";

// redux testing
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

it("renders DataUpload component", () => {
  let history = createMemoryHistory();
  let store;
  store = mockStore({
    login: {
      userid: 4
    }
  });
  const { container } = render(
    <Provider store={store}>
      <Router history={history}>
        <Route component={DataUpload} />
      </Router>
    </Provider>
  );
  let component = getAllByTestId(container, "DataUploadPage-test");
  expect(component.length).toBe(1);

  let button = getAllByTestId(container, "clickLetterBoxd");
  expect(button.length).toBe(1);

  fireEvent.click(getByTestId(container, "clickLetterBoxd"));
  component = getAllByText(container, "1.Log in to Letterboxd");
  expect(component.length).toBe(1);

  button = getAllByTestId(container, "clickIMDb");
  expect(button.length).toBe(1);

  fireEvent.click(getByTestId(container, "clickIMDb"));
  component = getAllByText(container, "1.Log in to IMDb");
  expect(component.length).toBe(1);
});
