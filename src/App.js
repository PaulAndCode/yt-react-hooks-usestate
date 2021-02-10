import React, {useState} from 'react';
import map from 'lodash/map';
import startCase from 'lodash/startCase';
import './App.css';

const Input = ({label, id, handleChange, name, type, value}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      type={type || 'text'}
      id={id}
      name={name || id}
      onChange={handleChange}
      value={value}
    />
    <br />
  </>
);

const Textarea = ({label, id, handleChange, name, value, rows}) => (
  <>
    <br />
    <div><label htmlFor={id}>{label}</label></div>
    <textarea
      id={id}
      name={name || id}
      onChange={handleChange}
      value={value}
      rows={rows || 3}
    />
    <br />
  </>
);

const Select = ({label, id, handleChange, name, value, options}) =>
  (
    <>
      <div><label htmlFor={id}>{label}</label></div>
      <select
        id={id}
        name={name || id}
        onChange={handleChange}
        value={value}
      >
        {map(options, ({label, value}) => <option value={value} key={value}>{label}</option>)}
      </select>
      <br/>
    </>
  );

const Radio = ({label, id, handleChange, name, form}) => (
  <>
    <input
      type="radio"
      id={id}
      name={name}
      onChange={handleChange}
      value={id}
      checked={form[name] === id}
    />
    <label htmlFor={id}>{label}</label>
    <br />
  </>
);

const Checkbox = ({label, id, handleChange, form}) => (
  <>
    <input
      type="checkbox"
      id={id}
      name={id}
      value={id}
      onChange={handleChange}
      checked={form[id]}
    />
    <label htmlFor={id}>{label}</label>
    <br />
  </>
);

function App() {
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
    <>
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
    </>
  );
}

export default App;
