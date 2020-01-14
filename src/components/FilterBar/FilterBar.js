import React from "react";

function FilterBar({ cuisines, selected, handleClick }) {
  const getClass = cuisine => {
    if (selected === cuisine) {
      return "btn btn-outline-primary active";
    } else {
      return "btn btn-outline-primary";
    }
  };

  return (
    <div className="btn-group" role="group">
      {cuisines.map(cuisine => (
        <button
          key={cuisine._id}
          className={getClass(cuisine)}
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
