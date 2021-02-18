import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import useForm from '../../utils/useForm';
import Checkbox from '../Checkbox';

const labelText = 'Hockey';
const id = 'hockey';
const Form = () => {
  const {handleChange, formValues} = useForm({
    name: '',
  });

  return (
    <Checkbox form={formValues} label="Hockey" id={id} handleChange={handleChange} />
  );
};

const setup = () => {
  const utils = render(<Form />);
  const input = screen.getByLabelText(labelText);
  return {
    input,
    ...utils,
  };
};

test('It should allow user input', () => {
  const {input} = setup();
  expect(input.value).toBe(id);
  expect(input.checked).toBe(false);
  fireEvent.change(input, {target: {checked: true}});
  expect(input.checked).toBe(true);
});
