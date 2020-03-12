import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { getAllByTestId, getAllByText, getByTestId } from "../../utils/test-utils.js";
import { Router, Route  } from "react-router-dom";
import { createMemoryHistory } from "history";

import DataUpload from './dataUpload.js';



  it("renders DataUpload component", () => {
    let history = createMemoryHistory();
    const { container } = render(
        <Router history={history}>
          <Route component={DataUpload} />
        </Router >
    );
    console.log(window.location.pathname)
    let component = getAllByTestId(container, "DataUploadPage-test"); 
    expect(component.length).toBe(1); 
 

    let button = getAllByTestId(container, "clickLetterBoxd");
    expect(button.length).toBe(1);

    fireEvent.click(getByTestId(container, "clickLetterBoxd"))
    component = getAllByText(container, "1.Log in to Letterboxd");
    expect(component.length).toBe(1); 


    button = getAllByTestId(container, "clickIMDb");
    expect(button.length).toBe(1);

    fireEvent.click(getByTestId(container, "clickIMDb"))
    component = getAllByText(container, "1.Log in to IMDb");
    expect(component.length).toBe(1); 

    })