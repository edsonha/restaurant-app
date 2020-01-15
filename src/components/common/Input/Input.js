import React from "react";

function Input({ name, label, type = "text", onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={`${name}-input`}>{label}</label>
      {type === "text" ? (
        <input
          type="text"
          className="form-control"
          id={`${name}-input`}
          name={name}
          onChange={onChange}
        />
      ) : (
        <input
          type="number"
          min="1"
          className="form-control"
          id={`${name}-input`}
          name={name}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default Input;
