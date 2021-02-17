import React from 'react';

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

export default Radio;
