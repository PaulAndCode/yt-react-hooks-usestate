import map from 'lodash/map';
import React from 'react';

const Select = ({label, id, handleChange, name, value, options}) => (
  <>
    <div>
      <label htmlFor={id}>{label}</label>
    </div>
    <select id={id} name={name || id} onChange={handleChange} value={value}>
      {map(options, ({label, value}) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
    <br />
  </>
);

export default Select;
