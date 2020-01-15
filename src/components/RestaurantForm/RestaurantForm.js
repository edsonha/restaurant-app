import React from "react";

function RestaurantForm(props) {
  const handleClick = () => {
    props.history.replace(props.returnPath);
  };

  return (
    <div>
      <h1>Restaurant Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name-input">Name</label>
          <input type="text" className="form-control" id="name-input" />
        </div>
        <div className="form-group">
          <label htmlFor="address-input">Address</label>
          <input type="text" className="form-control" id="address-input" />
        </div>
        <div className="form-group">
          <label htmlFor="opening-time-input">Opening Time</label>
          <input type="text" className="form-control" id="opening-time-input" />
        </div>
        <div className="form-group">
          <label htmlFor="closing-time-input">Closing Time</label>
          <input type="text" className="form-control" id="closing-time-input" />
        </div>
        <div className="form-group">
          <label htmlFor="cuisine-input">Cuisine</label>
          <input type="text" className="form-control" id="cuisine-input" />
        </div>
        <div className="form-group">
          <label htmlFor="price-input">Average Price</label>
          <input
            type="number"
            min="1"
            className="form-control"
            id="price-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image-url-input">Image URL</label>
          <input type="text" className="form-control" id="image-url-input" />
        </div>
        <button className="btn btn-primary btn-sm" onClick={handleClick}>
          Save
        </button>
      </form>
    </div>
  );
}

export default RestaurantForm;
