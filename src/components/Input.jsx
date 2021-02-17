import React from 'react';

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

export default Input;
