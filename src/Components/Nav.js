import React from "react";

function Nav() {
  return (
    <nav className="site-nav" aria-label="Primary Navigation">
      <ul className="nav-list">
        <li><a href="#home" aria-current="page">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#reservation">Reservation</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;



