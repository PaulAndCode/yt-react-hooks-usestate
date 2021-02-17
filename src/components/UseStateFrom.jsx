import React from 'react';
import map from 'lodash/map';
import startCase from 'lodash/startCase';
import Input from './Input';
import Radio from './Radio';
import Checkbox from './Checkbox';
import Textarea from './Textarea';
import Select from './Select';
import useForm from '../utils/useForm';

const UseStateForm = () => {
  const {formValues, handleChange} = useForm({
    name: '',
    weight: '',
    height: '',
    food: '',
    football: false,
    hockey: true,
    bio: 'What do you like to do?',
    car: ''
  });

  return (
    <form>
      {map(formValues, (val, key) => (
        <div key={key}>
          {`${startCase(key)}: `}
          {`${val}`}
        </div>
      ))}
      <Input label="Name: " id="name" handleChange={handleChange} value={formValues.name} />
      <Input
        label="Weight: "
        id="weight"
        handleChange={handleChange}
        value={formValues.weight}
      />
      <Input
        label="Height: "
        id="height"
        handleChange={handleChange}
        value={formValues.height}
      />
      <p>I like to eat:</p>
      <Radio
        form={formValues}
        name="food"
        label="Salad"
        id="salad"
        handleChange={handleChange}
      />
      <Radio
        form={formValues}
        name="food"
        label="Steak"
        id="steak"
        handleChange={handleChange}
      />
      <Radio
        form={formValues}
        name="food"
        label="Salad with Steak"
        id="saladWithSteak"
        handleChange={handleChange}
      />
      <p>I like the following: </p>
      <Checkbox form={formValues} label="Football" id="football" handleChange={handleChange} />
      <Checkbox form={formValues} label="Hockey" id="hockey" handleChange={handleChange} />
      <Textarea id="bio" label="Bio" handleChange={handleChange} value={formValues.bio}/>
      <Select value={formValues.car} id="car" label="I drive a: " handleChange={handleChange} options={[
        {label: "Please select", value: ''},
        {label: "Audi RS6", value: 'Audi RS6'},
        {label: "Audi RS4", value: 'Audi RS4'},
      ]}/>
    </form>
  );
};

export default UseStateForm;
