import React from "react";
import { render,fireEvent, } from "@testing-library/react";
import { getAllByTestId, getAllByText, getByTestId } from "../../utils/test-utils.js";
import DataUpload from './dataUpload';


describe('dataupload', () => {
    it('dataupload be defined', () => {
      expect(DataUpload).toBeDefined();
    });
  
    it('should render dataupload correctly', () => {
      const tree = (
        <DataUpload name='dataupload file test' />
      );
      expect(tree).toMatchSnapshot();
    });
   });
  

  it("renders errors to DataUpload on click", () => {
    const { container } = render(
        <Router>
        <DataUpload />
        </Router >
    );
  

    let form = getAllByTestId(container, "registerForm");
    expect(form.length).toBe(1);

    fireEvent.submit(getByTestId(container, "clickLetterBoxd"))
    let component = getAllByText(container, "Log in to Letterboxd");
    expect(component.length).toBe(1); 

    })