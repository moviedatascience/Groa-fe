import React from 'react';
import { render } from '@testing-library/react';

import Login from './login';



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


 