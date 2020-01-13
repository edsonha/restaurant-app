import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants()
  };

  render() {
    const { restaurants } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          {restaurants.map(restaurant => {
            return (
              <div
                className="col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex"
                key={restaurant._id}
              >
                <RestaurantCard details={restaurant} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomePage;
