// src/App.js
import React, { useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import HomePage from "./Components/Homepage";
import BookingPage from "./Components/BookingPage";
import ConfirmedBooking from "./Components/ConfirmedBooking";
import "./App.css";

// Initialize times with today's date
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Reducer to update times when date changes
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // Submit form function
  const submitForm = (formData, navigate) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed-booking");
    } else {
      alert("❌ There was a problem submitting your reservation.");
    }
  };

  return (
    <Router>
      <div className="app-grid">
        <Header />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/booking"
              element={
                <BookingPage
                  availableTimes={availableTimes}
                  dispatch={dispatch}
                  submitForm={submitForm}
                />
              }
            />
            <Route
              path="/confirmed-booking"
              element={<ConfirmedBooking />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
export { initializeTimes, updateTimes };


