import React from "react";
import logo from "../Logo.webp";  // logo is directly in src

function Header() {
  return (
    <header>
      {/* <img src="./logo.webp" alt="Little Lemon Logo" /> */}
         <img src={logo} alt="Logo" width="60" height="60" />
      <h1>Little Lemon</h1>
      <p>Chicago</p>
    </header>
  );
}

export default Header;
