import React from "react";

function RestaurantTable({ restaurants }) {
  const sortedList = restaurants.sort((first, second) => {
    if (first.name < second.name) return -1;
    if (first.name > second.name) return 1;
    return 0;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Opening Hours</th>
          <th>Cuisine</th>
          <th>AveragePrice</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedList.map(restaurant => (
          <tr key={restaurant._id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.address}</td>
            <td>
              {restaurant.openingTime} - {restaurant.closingTime}
            </td>
            <td>{restaurant.cuisine.name}</td>
            <td>${restaurant.averagePrice.toFixed(2)}</td>
            <td>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
