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

  handleSortSelect = event => {
    this.setState({ selectedSortBy: event.target.value });
  };

  compareByName = (a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  };

  compareByPrice = (a, b) => {
    return a.averagePrice - b.averagePrice;
  };

  sortByOption = (restaurants, sortOption) => {
    if (sortOption === "name") {
      return restaurants.sort(this.compareByName);
    }
    return restaurants.sort(this.compareByPrice);
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

    const sortedRestaurantList = this.sortByOption(
      filteredRestaurants,
      selectedSortBy
    );

    return (
      <div data-testid="home-page">
        <div className="row">
          <div className="col-auto mr-auto mt-3">
            <FilterBar
              cuisines={cuisines}
              selected={selectedCuisine}
              handleClick={this.handleCuisineSelect}
            />
          </div>
          <div className="col-auto mt-3">
            <SortBySelect
              options={sortByOptions}
              handleSelect={this.handleSortSelect}
            />
          </div>
        </div>

        <div className="row">
          {sortedRestaurantList.map(restaurant => {
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
