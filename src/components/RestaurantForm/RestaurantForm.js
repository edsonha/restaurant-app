import React from "react";

function RestaurantForm(props) {
  const handleClick = () => {
    props.history.replace(props.returnPath);
  };

  return (
    <div>
      <h1>Restaurant Form</h1>
      <button className="btn btn-primary btn-sm" onClick={handleClick}>
        Save
      </button>
    </div>
  );
}

export default RestaurantForm;
