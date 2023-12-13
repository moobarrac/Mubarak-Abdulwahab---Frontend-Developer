import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Popup from "./Popup";

describe("Popup Component", () => {
  const capsuleMock = {
    capsule_serial: "C101",
    type: "Type1",
    status: "active",
    original_launch: "2010-06-04",
    details: "Test details",
    reuse_count: 2,
    missions: [
      { name: "Mission1", flight: 1 },
      { name: "Mission2", flight: 2 },
    ],
  };

  const closeMock = jest.fn();

  test("renders correctly with capsule data", () => {
    render(<Popup isOpen={true} close={closeMock} capsule={capsuleMock} />);
    expect(screen.getByText("C101")).toBeInTheDocument();
    expect(screen.getByText("Type1")).toBeInTheDocument();
  });

  test("closes on clicking outside", () => {
    const { getByTestId } = render(
      <Popup isOpen={true} close={closeMock} capsule={capsuleMock} />
    );
    fireEvent.mouseDown(document);
    expect(closeMock).toHaveBeenCalled();
  });

  test("closes on Escape key press", () => {
    render(<Popup isOpen={true} close={closeMock} capsule={capsuleMock} />);
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });
    expect(closeMock).toHaveBeenCalled();
  });

  test("closes on close button click", () => {
    render(<Popup isOpen={true} close={closeMock} capsule={capsuleMock} />);
    fireEvent.click(screen.getByTestId("close-button"));
    expect(closeMock).toHaveBeenCalled();
  });
});
