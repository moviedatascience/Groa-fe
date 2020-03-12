import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId } from "../../utils/test-utils.js";
import {BrowserRouter as Router } from "react-router-dom";

// component to be tested
import Congratulations from "./Congratulations.js";

it("renders Congratulations component", () =>{
    const { container } = render(
        <Router>
            <Congratulations />
        </Router>
    );
    const component = getAllByTestId(container, "congrats-screen"); 
    expect(component.length).toBe(1); 
});