import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";

beforeEach(cleanup);

describe("App", () => {
  it("should render menu links to Home, Order and Admin and able to navigate to the correct pages", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    const { getByTestId, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    fireEvent.click(getByText(/home/i));
    expect(getByTestId("home-page")).toBeInTheDocument();

    fireEvent.click(getByText(/admin/i));
    expect(getByTestId("admin-page")).toBeInTheDocument();

    fireEvent.click(getByText(/orders/i));
    expect(getByTestId("order-page")).toBeInTheDocument();
  });

  it("should navigate to the restaurant form when Create New button is clicked", () => {
    const history = createMemoryHistory({ initialEntries: ["/admin"] });
    const { getByText, getByTestId } = render(
      <Router history={history}>
        <App />
      </Router>
    );

    fireEvent.click(getByText(/admin/i));
    fireEvent.click(getByText(/create new/i));
    expect(getByTestId("create-page")).toBeInTheDocument();
  });
});
