import React from "react";
import { render, fireEvent } from "@testing-library/react";
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
    _id: "5c342ac9fc13ae39f8000003",
    name: "Ramen Champion",
    address:
      "#03-89, 6 Eu Tong Sen Street, The Central, Clarke Quay, Lower Central, 059817 Singapore",
    openingTime: "11:00",
    closingTime: "22:00",
    cuisine: { _id: "5c3430ecfc13ae122d000001", name: "Japanese" },
    imageUrl: "images/restaurants/5c342ac9fc13ae39f8000003.jpg"
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

  it("should display only western restaurants when western cuisine is selected on the Filter Bar", () => {
    const { getAllByText, getByTestId, getByText, queryByText } = render(
      <HomePage />
    );
    const filterBtnWestern = getByTestId("filter-btn-western");
    expect(getAllByText("Order").length).toEqual(2);

    fireEvent.click(filterBtnWestern);
    expect(getByText(/The Burger Bar by Fatboy/i)).toBeInTheDocument();
    expect(queryByText("Ramen Champion")).not.toBeInTheDocument();
    expect(getAllByText("Order").length).toEqual(1);
  });

  it("should display all restaurants when All cuisine is selected on the Filter Bar", () => {
    const { getAllByText, getByTestId, getByText } = render(<HomePage />);
    const filterBtnWestern = getByTestId("filter-btn-western");
    const filterBtnAll = getByTestId("filter-btn-all");

    fireEvent.click(filterBtnWestern);
    expect(getAllByText("Order").length).toEqual(1);

    fireEvent.click(filterBtnAll);
    expect(getByText(/The Burger Bar by Fatboy/i)).toBeInTheDocument();
    expect(getByText(/Ramen Champion/i)).toBeInTheDocument();
    expect(getAllByText("Order").length).toEqual(2);
  });
});
