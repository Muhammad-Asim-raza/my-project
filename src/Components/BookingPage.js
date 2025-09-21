// src/Components/BookingPage.js
import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking">
      <h2>Reserve a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;





