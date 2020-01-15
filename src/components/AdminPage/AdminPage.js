import React, { Component } from "react";
import RestaurantTable from "../RestaurantTable/RestaurantTable";
import { getRestaurants } from "../../services/restaurantService";

class AdminPage extends Component {
  state = {
    restaurants: getRestaurants()
  };

  render() {
    const { restaurants } = this.state;
    return (
      <div data-testid="admin-page">
        <RestaurantTable restaurants={restaurants} />
      </div>
    );
  }
}

export default AdminPage;
