import React from "react";

function FilterBar({ cuisines, selected, handleClick }) {
  const getClass = (cuisine, selected) => {
    if (!selected && cuisine.name === "All") return "btn btn-primary";
    if (selected && cuisine.name === selected.name) return "btn btn-primary";
    return "btn btn-outline-primary";
  };

  return (
    <div>
      {cuisines.map(cuisine => (
        <button
          key={cuisine._id}
          className={getClass(cuisine, selected)}
          onClick={() => handleClick(cuisine)}
        >
          {cuisine.name}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
