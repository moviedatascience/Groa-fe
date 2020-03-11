import React from "react";
import { render } from "@testing-library/react";
import DataUpload from './dataUpload';
import { clikDataUpload } from "../../utils/test-utils.js";

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
  
   test('drop dataupload file at upload spot', () => {
      expect(clikDataUpload.sum(0, 1)).toBe(1)
  })

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