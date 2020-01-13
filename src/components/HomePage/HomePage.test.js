import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";
import * as RestaurantService from "../../services/restaurantService";

const sampleData = [
  {
    _id: "5c342ac9fc13ae39f8000000",
    name: "The Burger Bar by Fatboy's Concepts (Boat Quay)",
    address: "35 Boat Quay, 049824 Singapore",
    openingTime: "11:00 AM",
    closingTime: "10:30 PM",
    cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000000.jpg"
  },
  {
    _id: "5c342ac9fc13ae39f8000001",
    name: "The Soup Spoon (Tanjong Pagar Exchange)",
    address: "120 Maxwell Road, Tanjong Pagar Xchange, B1-31, 069119 Singapore",
    openingTime: "12:00 PM",
    closingTime: "9:30 PM",
    cuisine: { _id: "5c3430ecfc13ae122d000000", name: "Western" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000001.jpg"
  }
];

beforeEach(() => {
  jest
    .spyOn(RestaurantService, "getRestaurants")
    .mockImplementation(() => sampleData);
});

afterEach(() => {
  RestaurantService.getRestaurants.mockRestore();
});

describe("HomePage", () => {
  it("should display list of two restaurants on load", () => {
    const { getAllByText } = render(<HomePage />);

    expect(RestaurantService.getRestaurants).toHaveBeenCalledTimes(1);
    expect(getAllByText("Order").length).toEqual(2);
  });
});
