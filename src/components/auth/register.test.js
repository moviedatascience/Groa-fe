import React from "react";
import { render,fireEvent, } from "@testing-library/react";
import { getAllByTestId, getAllByText, getByTestId } from "../../utils/test-utils.js";
import { BrowserRouter as Router } from "react-router-dom";

// component to be tested.
import Register from "./Register.js";


it("renders Register component", () => { 
    const { container } = render(
        <Router>
        <Register />
        </Router >
    ); 
    const component = getAllByTestId(container, "register-component"); 
    expect(component.length).toBe(1); 
});



it("renders errors to register on Click if info not filled out", () => {
    const { container } = render(
        <Router>
        <Register />
        </Router >
    );

    let form = getAllByTestId(container, "registerForm");
    expect(form.length).toBe(1);

    fireEvent.submit(getByTestId(container, "registerForm"))
    let component = getAllByText(container, "Email is required");
    expect(component.length).toBe(1);  

    component = getAllByText(container, "Password is required");
    expect(component.length).toBe(1); 

    component = getAllByText(container, "Username is required");
    expect(component.length).toBe(1);   
});