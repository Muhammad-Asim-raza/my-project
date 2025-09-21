import React from "react";
import logo from "../Logo.webp";

function Header() {
  return (
    <header className="site-header" role="banner">
      <img 
        src={logo} 
        alt="Little Lemon Restaurant Logo" 
        className="logo" 
        width="60" 
        height="60" 
      />
      <div className="branding">
        <h1>Little Lemon</h1>
        <p>Chicago</p>
      </div>
    </header>
  );
}

export default Header;
