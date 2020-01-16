import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RestaurantForm from "./RestaurantForm";

describe("Restaurant Form", () => {
  it("should display all form fields on load", () => {
    const match = { params: { id: 1 } };
    const { getByLabelText } = render(<RestaurantForm match={match} />);

    expect(getByLabelText("Name")).toHaveAttribute("type", "text");
    expect(getByLabelText("Address")).toHaveAttribute("type", "text");
    expect(getByLabelText("Opening Time")).toHaveAttribute("type", "text");
    expect(getByLabelText("Closing Time")).toHaveAttribute("type", "text");
    expect(getByLabelText("Cuisine")).toBeInTheDocument();
    expect(getByLabelText("Average Price")).toHaveAttribute("type", "number");
    expect(getByLabelText("Image URL")).toHaveAttribute("type", "text");
  });

  it("should have disabled save button on page load", () => {
    const match = { params: { id: 1 } };
    const { getByText } = render(<RestaurantForm match={match} />);
    expect(getByText("Save")).toHaveAttribute("disabled");
  });

  it("should display error message if text input is invalid", () => {
    const match = { params: { id: 1 } };
    const message = /is not allowed to be empty/i;
    const { getByText, queryByText, getByLabelText } = render(
      <RestaurantForm match={match} />
    );
    const input = getByLabelText(/name/i);

    fireEvent.change(input, { target: { value: "a" } });
    fireEvent.change(input, { target: { value: "" } });
    expect(getByText(message)).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Restaurant 1" } });
    expect(queryByText(message)).not.toBeInTheDocument();
  });

  it("should display error message if number input is invalid", () => {
    const match = { params: { id: 1 } };
    const message = /must be larger than or equal to 1/i;
    const { getByText, queryByText, getByLabelText } = render(
      <RestaurantForm match={match} />
    );
    const input = getByLabelText(/Average Price/i);

    fireEvent.change(input, { target: { value: "0" } });
    expect(getByText(message)).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "1" } });
    expect(queryByText(message)).not.toBeInTheDocument();
  });
});
