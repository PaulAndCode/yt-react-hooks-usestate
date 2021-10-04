import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import UseStateFrom from 'src/components/UseStateForm';

test('Input fields', () => {
  render(<UseStateFrom />);
  ['Name: ', 'Weight: ', 'Height: '].forEach((label) => {
    const input = screen.getByLabelText(label);
    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: 'hello world'}});
    expect(input.value).toBe('hello world');
  });
});
