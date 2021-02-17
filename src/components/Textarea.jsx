import React from 'react';

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

export default Textarea;
