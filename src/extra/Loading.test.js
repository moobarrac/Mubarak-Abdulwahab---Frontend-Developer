import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "./Loading";

describe("Loading Component", () => {
  test("renders loading indicator", () => {
    render(<Loading />);

    // Check if the loading text is displayed
    expect(screen.getByTestId("loading-indicator")).toHaveTextContent(
      "Loading..."
    );
  });
});
