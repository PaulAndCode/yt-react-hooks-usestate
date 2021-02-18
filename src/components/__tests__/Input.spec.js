import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import useForm from '../../utils/useForm';
import Input from '../Input';

const labelText = 'name';
const Form = ({type}) => {
  const {handleChange, formValues} = useForm({
    name: '',
  });

  return (
    <Input
      type={type}
      label={labelText}
      id="name"
      handleChange={handleChange}
      value={formValues.name}
    />
  );
};

const setup = (type) => {
  const utils = render(<Form type={type} />);
  const input = screen.getByLabelText(labelText);
  return {
    input,
    ...utils,
  };
};

test('It should allow user input', () => {
  const {input} = setup();
  expect(input.value).toBe('');
  fireEvent.change(input, {target: {value: 'Good Day'}});
  expect(input.value).toBe('Good Day');
  expect(input.type).toBe('text');
});

test('It should only allow numbers to be inputted if type is "number"', () => {
  const {input} = setup('number');
  expect(input.type).toBe('number');
  expect(input.value).toBe('');
  fireEvent.change(input, {target: {value: 'Good Day!!'}});
  expect(input.value).toBe('');
  fireEvent.change(input, {target: {value: 5}});
  expect(input.value).toBe('5');
});
