import React, {useState} from 'react';
import map from 'lodash/map';
import startCase from 'lodash/startCase';
import Input from './Input';
import Radio from './Radio';
import Checkbox from './Checkbox';
import Textarea from './Textarea';
import Select from './Select';

const UseStateForm = () => {
  const [form, setFormValue] = useState({
    name: '',
    weight: '',
    height: '',
    food: '',
    football: false,
    hockey: true,
    bio: 'What do you like to do?',
    car: ''
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    console.log({...e.target});
    setFormValue((prevFormValues) => ({
      ...prevFormValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form>
      {map(form, (val, key) => (
        <div key={key}>
          {`${startCase(key)}: `}
          {`${val}`}
        </div>
      ))}
      <Input label="Name: " id="name" handleChange={handleChange} value={form.name} />
      <Input
        label="Weight: "
        id="weight"
        handleChange={handleChange}
        value={form.weight}
      />
      <Input
        label="Height: "
        id="height"
        handleChange={handleChange}
        value={form.height}
      />
      <p>I like to eat:</p>
      <Radio
        form={form}
        name="food"
        label="Salad"
        id="salad"
        handleChange={handleChange}
      />
      <Radio
        form={form}
        name="food"
        label="Steak"
        id="steak"
        handleChange={handleChange}
      />
      <Radio
        form={form}
        name="food"
        label="Salad with Steak"
        id="saladWithSteak"
        handleChange={handleChange}
      />
      <p>I like the following: </p>
      <Checkbox form={form} label="Football" id="football" handleChange={handleChange} />
      <Checkbox form={form} label="Hockey" id="hockey" handleChange={handleChange} />
      <Textarea id="bio" label="Bio" handleChange={handleChange} value={form.bio}/>
      <Select value={form.car} id="car" label="I drive a: " handleChange={handleChange} options={[
        {label: "Please select", value: ''},
        {label: "Audi RS6", value: 'Audi RS6'},
        {label: "Audi RS4", value: 'Audi RS4'},
      ]}/>
    </form>
  );
};

export default UseStateForm;
