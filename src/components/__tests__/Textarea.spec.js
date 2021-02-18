import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import useForm from '../../utils/useForm';
import Textarea from '../Textarea';

const labelText = 'name';
const Form = () => {
  const {handleChange, formValues} = useForm({
    name: '',
  });

  return (
    <Textarea
      label={labelText}
      id="name"
      handleChange={handleChange}
      value={formValues.name}
    />
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
  expect(input.value).toBe('');
  fireEvent.change(input, {target: {value: 'Good Day'}});
  expect(input.value).toBe('Good Day');
});
