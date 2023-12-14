import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/spaceXSlice";
import DataGrid from "./DataGrid";

function createTestStore(overrideState = {}) {
  const baseState = {
    spaceX: {
      capsules: [],
      isLoading: false,
      error: null,
      pagination: { offset: 0, limit: 10 },
    },
    ...overrideState,
  };
  return configureStore({ reducer: rootReducer, preloadedState: baseState });
}

describe("DataGrid Component", () => {
  test("displays message for empty capsules", () => {
    const testStore = createTestStore();

    render(
      <Provider store={testStore}>
        <DataGrid />
      </Provider>
    );

    expect(screen.getByText(/no capsules found\./i)).toBeInTheDocument();
  });

  test("renders capsules data correctly", () => {
    const capsulesData = [
      {
        capsule_serial: "C101",
        type: "Type1",
        status: "active",
        landings: 2,
        details: "Detail1",
      },
    ];

    const testStore = createTestStore({
      spaceX: { capsules: capsulesData, pagination: { offset: 0, limit: 10 } },
    });

    render(
      <Provider store={testStore}>
        <DataGrid />
      </Provider>
    );

    capsulesData.forEach((capsule) => {
      expect(
        screen.getByText((content, element) => {
          return (
            element.tagName.toLowerCase() === "h3" &&
            content.includes(capsule.capsule_serial)
          );
        })
      ).toBeInTheDocument();

      expect(
        screen.getByText((content, element) => {
          return (
            element.tagName.toLowerCase() === "h3" &&
            content.includes(capsule.type)
          );
        })
      ).toBeInTheDocument();

      expect(screen.getByText(`${capsule.landings}`)).toBeInTheDocument();
      expect(screen.getByText(capsule.details)).toBeInTheDocument();
    });
  });
});
