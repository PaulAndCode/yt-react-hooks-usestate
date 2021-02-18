import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import useForm from '../../utils/useForm';
import Radio from '../Radio';

const name = 'food';

const radioProps = [
  {label: 'Salad', id: 'salad'},
  {label: 'Steak', id: 'steak'},
  {label: 'Salad with Steak', id: 'saladWithSteak'},
];

const Form = ({initialChecked}) => {
  const {handleChange, formValues} = useForm({
    salad: initialChecked,
  });

  return (
    <>
      {radioProps.map(({label, id}) => (
        <Radio
          key={id}
          form={formValues}
          name={name}
          label={label}
          id={id}
          handleChange={handleChange}
        />
      ))}
    </>
  );
};

const setup = (initialChecked) => {
  const utils = render(<Form initialChecked={initialChecked} />);
  return {
    radios: radioProps.map((prop) => ({
      ...prop,
      component: screen.getByLabelText(prop.label),
    })),
    ...utils,
  };
};

test('It should allow user input', () => {
  const {radios} = setup();

  radios.forEach(({component, id}) => {
    expect(component.value).toBe(id);
    expect(component.checked).toBe(false);
    fireEvent.change(component, {target: {checked: true}});
    expect(component.checked).toBe(true);
  });
});

test('Only one radio button should be checked at a time', () => {
  const {radios} = setup();
  const [radio1, radio2, radio3] = radios;
  const component1 = radio1.component;
  const component2 = radio2.component;
  const component3 = radio3.component;
  expect(component1.name).toBe(name);
  expect(component2.name).toBe(name);
  expect(component3.name).toBe(name);
  expect(component1.checked).toBe(false);
  expect(component2.checked).toBe(false);
  expect(component3.checked).toBe(false);
  fireEvent.change(component1, {target: {checked: true}});
  expect(component1.checked).toBe(true);
  expect(component2.checked).toBe(false);
  expect(component3.checked).toBe(false);
  fireEvent.change(component2, {target: {checked: true}});
  expect(component1.checked).toBe(false);
  expect(component2.checked).toBe(true);
  expect(component3.checked).toBe(false);
  fireEvent.change(component3, {target: {checked: true}});
  expect(component1.checked).toBe(false);
  expect(component2.checked).toBe(false);
  expect(component3.checked).toBe(true);
});
