import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import { getCuisines, getDefaultCuisine } from "../../services/cuisineService";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import FilterBar from "../FilterBar/FilterBar";
import SortBySelect from "../SortBySelect/SortBySelect";

class HomePage extends Component {
  state = {
    restaurants: getRestaurants(),
    cuisines: [getDefaultCuisine(), ...getCuisines()],
    selectedCuisine: getDefaultCuisine(),
    sortByOptions: [
      { name: "Restaurant Name", value: "name" },
      { name: "Average Price", value: "averagePrice" }
    ],
    selectedSortBy: "name"
  };

  handleCuisineSelect = cuisine => {
    this.setState({ selectedCuisine: cuisine });
  };

  render() {
    const {
      restaurants,
      cuisines,
      selectedCuisine,
      sortByOptions,
      selectedSortBy
    } = this.state;
    const filteredRestaurants =
      selectedCuisine === getDefaultCuisine()
        ? restaurants
        : restaurants.filter(restaurant => {
            return restaurant.cuisine.name === selectedCuisine.name;
          });
    return (
      <div className="container">
        <div className="row">
          <div className="col-auto mr-auto mt-3">
            <FilterBar
              cuisines={cuisines}
              selected={selectedCuisine}
              handleClick={this.handleCuisineSelect}
            />
          </div>
          <div className="col-auto mt-3">
            <SortBySelect options={sortByOptions} selected={selectedSortBy} />
          </div>
        </div>

        <div className="row">
          {filteredRestaurants.map(restaurant => {
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
