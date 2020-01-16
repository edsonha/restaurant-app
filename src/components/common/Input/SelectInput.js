import React from "react";

function SelectInput({ name, label, options, onChange, value }) {
  return (
    <div className="form-group">
      <label htmlFor={`${name}-select`}>{label}</label>
      <select
        value={value}
        className="custom-select"
        id={`${name}-select`}
        name={name}
        onChange={onChange}
      >
        <option key="default">Choose one</option>
        {options.map(option => (
          <option value={option._id} key={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
