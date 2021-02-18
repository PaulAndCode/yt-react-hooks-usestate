import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import useForm from '../../utils/useForm';
import Select from '../Select';

const labelText = 'I drive a:';
const Form = () => {
  const {handleChange, formValues} = useForm({
    name: '',
  });

  return (
    <Select
      value={formValues.car}
      id="car"
      label={labelText}
      handleChange={handleChange}
      options={[
        {label: 'Please select', value: ''},
        {label: 'Audi RS6', value: 'Audi RS6'},
        {label: 'Audi RS4', value: 'Audi RS4'},
      ]}
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
  fireEvent.change(input, {target: {value: 'Audi RS6'}});
  expect(input.value).toBe('Audi RS6');
});
