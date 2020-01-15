import React, { Component } from "react";
import { getCuisines } from "../../services/cuisineService";
import Input from "../common/Input/Input";
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
          <Input name="name" label="Name" />
          <Input name="address" label="Address" />
          <Input name="openingTime" label="Opening Time" />
          <Input name="closingTime" label="Closing Time" />
          <SelectInput name="cuisine" label="Cuisine" options={cuisines} />
          <Input name="average-price" label="Average Price" type="number" />
          <Input name="image-url" label="Image URL" />
          <button className="btn btn-primary btn-sm" onClick={this.handleClick}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default RestaurantForm;
