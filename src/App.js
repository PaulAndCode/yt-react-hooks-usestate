import React, {useState} from 'react';
import map from 'lodash/map';
import startCase from 'lodash/startCase';
import './App.css';

const Input = ({label, id, handleChange, name, type}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input type={type || 'text'} id={id} name={name || id} onChange={handleChange} />
    <br />
  </>
);

function App() {
  const [form, setFormValue] = useState({name: '', weight: '', height: ''});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  return (
    <>
      {map(form, (val, key) => (
        <p key={key}>
          {`${startCase(key)}: `}
          {val}
        </p>
      ))}
      <Input label="Name: " id="name" handleChange={handleChange} />
      <Input label="Weight: " id="weight" handleChange={handleChange} />
      <Input label="Height: " id="height" handleChange={handleChange} />
    </>
  );
}

export default App;
