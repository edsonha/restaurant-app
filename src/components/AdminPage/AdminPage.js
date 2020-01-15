import React, { Component } from "react";
import RestaurantTable from "../RestaurantTable/RestaurantTable";
import {
  getRestaurants,
  deleteRestaurant
} from "../../services/restaurantService";

class AdminPage extends Component {
  state = {
    restaurants: getRestaurants()
  };

  handleDeleteRestaurant = restaurantId => {
    deleteRestaurant(restaurantId);
    this.setState({ restaurants: getRestaurants() });
  };

  render() {
    const { restaurants } = this.state;
    return (
      <div data-testid="admin-page">
        <RestaurantTable
          restaurants={restaurants}
          handleDelete={this.handleDeleteRestaurant}
        />
      </div>
    );
  }
}

export default AdminPage;
