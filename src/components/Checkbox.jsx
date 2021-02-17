import React from 'react';

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

export default Checkbox;
