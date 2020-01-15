import React from "react";

function SelectInput({ name, label, options }) {
  return (
    <div className="form-group">
      <label htmlFor={`${name}-select`}>{label}</label>
      <select defaultValue="" className="custom-select" name={`${name}-input`}>
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
