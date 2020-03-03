import React from "react";
import { render } from "@testing-library/react";
import postLogin from './postLogin';
import { clikpostLogin } from "../../utils/test-utils";


describe('Button postlogin', () => {
  it('postlogin be defined', () => {
    expect(postLogin).toBeDefined();
  });

  it('should render postlogin correctly', () => {
    const tree = (
      <postLogin name='post login button test' />
    );
    expect(tree).toMatchSnapshot();
  });
 });

 test('adds properly', () => {
    expect(clikpostLogin.sum(0, 1)).toBe(1)
})

