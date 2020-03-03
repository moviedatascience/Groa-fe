import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId } from "../../utils/test-utils.js";


// component to be tested.
import Register from "./Register.js";

it("renders Register component", () => { 
    const { container } = render(<Register />); 
    const component = getAllByTestId(container, "Register-component"); 
    expect(component.length).toBe(1); 
});