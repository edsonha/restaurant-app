import React from "react";
import { render } from "@testing-library/react";
import SortBySelect from "./SortBySelect";

describe("Sort By Dropdown Menu", () => {
  it("should render a select list from options, 'Restaurant Name' is selected by default", () => {
    const sortByOptions = [
      { name: "Restaurant Name", value: "name" },
      { name: "Average Price", value: "averagePrice" }
    ];

    const { getByDisplayValue, getByText, getByLabelText } = render(
      <SortBySelect options={sortByOptions} handleSelect={() => {}} />
    );

    expect(getByDisplayValue("Restaurant Name")).toBeVisible();
    expect(getByLabelText("Sort By")).toContainElement(
      getByText("Restaurant Name")
    );
    expect(getByLabelText("Sort By")).toContainElement(
      getByText("Average Price")
    );
  });
});
