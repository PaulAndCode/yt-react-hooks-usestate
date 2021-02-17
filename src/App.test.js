import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders learn UseStateForm', () => {
  const {getByText} = render(<App />);
  const headingElement = getByText(/UseStateForm/i);
  expect(headingElement).toBeInTheDocument();
});
