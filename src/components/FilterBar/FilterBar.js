import React from "react";

function FilterBar({ cuisines, selected, handleClick }) {
  const getClass = (cuisine, selected) => {
    if (!selected && cuisine.name === "All") return "btn btn-primary";
    if (selected && cuisine.name === selected.name) return "btn btn-primary";
    return "btn btn-outline-primary";
  };

  return (
    <div className="btn-group" role="group">
      {cuisines.map(cuisine => (
        <button
          key={cuisine._id}
          className={getClass(cuisine, selected)}
          onClick={() => handleClick(cuisine)}
          data-testid={`filter-btn-${cuisine.name.toLowerCase()}`}
        >
          {cuisine.name}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
