import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const valid =
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== "";
    setIsFormValid(valid);
  }, [date, time, guests, occasion]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    dispatch({ type: "UPDATE", date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData, navigate);
  };

  return (
    <form 
      className="booking-form" 
      onSubmit={handleSubmit} 
      aria-label="Reservation Form"
      noValidate
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        aria-required="true"
        value={date}
        min={today}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        aria-required="true"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">-- Select time --</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        aria-required="true"
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        aria-required="true"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">-- Select occasion --</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button 
        type="submit" 
        aria-label="Submit Reservation" 
        disabled={!isFormValid}
      >
        Submit Reservation
      </button>
    </form>
  );
}

export default BookingForm;
