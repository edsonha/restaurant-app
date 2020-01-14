import React from "react";
import { render } from "@testing-library/react";
import FilterBar from "./FilterBar";

describe("Filter Bar", () => {
  it("should render a cuisine menu from a list, ALL is selected by default", () => {
    const allCuisine = {
      _id: "5c3430ecfc13ae122d000005",
      name: "All"
    };
    const cuisines = [
      allCuisine,
      {
        _id: "5c3430ecfc13ae122d000000",
        name: "Western"
      }
    ];

    const { getByText } = render(
      <FilterBar cuisines={cuisines} selected={null} handleClick={null} />
    );
    expect(getByText(/all/i)).toBeInTheDocument();
    expect(getByText(/western/i)).toBeInTheDocument();
    expect(getByText(/all/i)).toHaveAttribute(
      "class",
      "btn btn-outline-primary"
    );
  });

  it("should highlight the cuisine when it is selected", () => {
    const western = {
      _id: "5c3430ecfc13ae122d000000",
      name: "Western"
    };
    const cuisines = [
      {
        _id: "5c3430ecfc13ae122d000005",
        name: "All"
      },
      western
    ];

    const { getByText } = render(
      <FilterBar cuisines={cuisines} selected={western} handleClick={null} />
    );
    expect(getByText(/all/i)).toBeInTheDocument();
    expect(getByText(/western/i)).toBeInTheDocument();
    expect(getByText(/western/i)).toHaveAttribute(
      "class",
      "btn btn-outline-primary active"
    );
  });
});
