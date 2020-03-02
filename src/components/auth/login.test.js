import React from 'react';
import { render } from '@testing-library/react';

import Login from './login'

test('Login Component renders', () => {
    const container = render(<Login/>)
    console.log(container);

    const logincomponent = getAllByTestId(container, "Login");
    expect(logincomponent.length).toBe(1);
  })

////////////////////////////////////////////////////

const addClick = clicked => {
    return clicked + 1;
}

  test('on Login clicked', () => {
    expect(addClick(0)).toBe(1);
   })

