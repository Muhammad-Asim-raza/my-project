import React from "react";
import logo from "../Logo.webp"; // keep as-is if Header.js is in src/components

function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Little Lemon Logo" className="logo" width="60" height="60" />
      <div className="branding">
        <h1>Little Lemon</h1>
        <p>Chicago</p>
      </div>
    </header>
  );
}

export default Header;

