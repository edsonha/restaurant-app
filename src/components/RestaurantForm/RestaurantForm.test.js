import React from "react";
import { render } from "@testing-library/react";
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
});
