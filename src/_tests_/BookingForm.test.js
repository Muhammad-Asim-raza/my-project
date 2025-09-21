import { render, screen } from "@testing-library/react";
import BookingForm from "../Components/BookingForm";
import React from "react";

// Mock dispatch function
const mockDispatch = jest.fn();

test("renders the 'Choose date' label", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={mockDispatch} />);
  const labelElement = screen.getByText(/Choose date/i);
  expect(labelElement).toBeInTheDocument();
});

test("renders the 'Number of guests' label", () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={mockDispatch} />);
  const labelElement = screen.getByText(/Number of guests/i);
  expect(labelElement).toBeInTheDocument();
});
