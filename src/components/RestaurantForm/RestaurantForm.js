import React, { Component } from "react";
import { getCuisines } from "../../services/cuisineService";
import SelectInput from "../common/Input/SelectInput";

class RestaurantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: getCuisines()
    };
  }

  handleClick = () => {
    this.props.history.replace(this.props.returnPath);
  };

  render() {
    const { cuisines } = this.state;
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
            <input
              type="text"
              className="form-control"
              id="opening-time-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="closing-time-input">Closing Time</label>
            <input
              type="text"
              className="form-control"
              id="closing-time-input"
            />
          </div>
          <SelectInput name="cuisine" label="Cuisine" options={cuisines} />
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
          <button className="btn btn-primary btn-sm" onClick={this.handleClick}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
