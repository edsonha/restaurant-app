import React from "react";

function SortBySelect({ options, selected }) {
  return (
    <div>
      <label htmlFor="sort-by-select">Sort By</label>
      <select
        name="sort-by-select"
        className="btn btn-primary dropdown-toggle mx-2"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBySelect;
