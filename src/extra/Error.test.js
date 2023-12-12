import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error from "./Error";

describe("Error Component", () => {
  const mockRetryFunction = jest.fn();
  const errorMessage = "Test Error Message";

  test("renders error message and retry button", () => {
    render(<Error onButtonClick={mockRetryFunction} error={errorMessage} />);

    // Check if the error message is displayed
    expect(screen.getByText("Error Loading Data")).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toBeInTheDocument();

    // Check if the retry button is displayed
    const retryButton = screen.getByRole("button", { name: "Retry" });
    expect(retryButton).toBeInTheDocument();
  });

  test("calls retry function on button click", () => {
    render(<Error onButtonClick={mockRetryFunction} error={errorMessage} />);

    // Simulate button click
    const retryButton = screen.getByRole("button", { name: "Retry" });
    fireEvent.click(retryButton);

    // Check if the mock function was called
    expect(mockRetryFunction).toHaveBeenCalled();
  });
});
