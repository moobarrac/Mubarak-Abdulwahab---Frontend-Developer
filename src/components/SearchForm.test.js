import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SearchForm from "./SearchForm";

const mockStore = configureStore([]);

describe("SearchForm Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      spaceX: {
        filters: {
          status: "",
          originalLaunch: "",
          type: "",
        },
      },
    });
  });

  test("renders search form and inputs", () => {
    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    expect(screen.getByText("Filter Capsules")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Original Launch")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Type e.g Dragon 1.0")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  test("submits the form", () => {
    const mockSubmit = jest.fn();
    store.dispatch = mockSubmit;

    render(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    );

    const button = screen.getByRole("button", { name: "Search" });
    fireEvent.click(button);

    expect(mockSubmit).toHaveBeenCalled();
  });
});
