import React from 'react';
import { render } from '@testing-library/react';

import Login from './login';
import { clikLogin } from "../../utils/test-utils";


describe('Button', () => {
  it('should be defined', () => {
    expect(Login).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = (
      <Login name='button test' />
    );
    expect(tree).toMatchSnapshot();
  });
 });

 test('adds properly', () => {
  expect(clikLogin.sum(0, 1)).toBe(1)
})

 