// src/__tests__/App.test.js
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App, { initializeTimes, updateTimes } from "../App";
import { fetchAPI, submitAPI } from "../api";

// --- Mock fetchAPI & submitAPI ---
jest.mock("../api", () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

beforeEach(() => {
  // reset mocks before each test
  jest.clearAllMocks();
});

describe("App component", () => {
  test("renders Little Lemon homepage link", () => {
    // Make fetchAPI return some dummy times so App doesn’t break
    fetchAPI.mockReturnValue(["17:00", "18:00"]);

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Nav.js has <a href="#home">Home</a>
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe("initializeTimes", () => {
  test("returns available times from fetchAPI", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  test("updates available times when dispatch called", () => {
    const mockTimes = ["20:00", "21:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const action = { type: "UPDATE", date: "2025-09-18" };
    const result = updateTimes([], action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date(action.date));
    expect(result).toEqual(mockTimes);
  });

  test("returns same state for unknown action", () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: "UNKNOWN" };
    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState);
  });
});
