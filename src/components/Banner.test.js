import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Banner from "./Banner";

describe("Banner Component", () => {
  test("renders the banner component", () => {
    render(<Banner />);
    expect(screen.getByText("SPACE")).toBeInTheDocument();
    expect(screen.getByText("CAPSULES")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Explore/ })).toBeInTheDocument();
  });
});
