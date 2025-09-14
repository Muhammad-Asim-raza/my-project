import React from "react";
function Footer() {
  return (
    <footer>
      <section>
        <h2>Navigation</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#menu">Menu</a></li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Address: Chicago</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: contact@littlelemon.com</p>
      </section>

      <section>
        <h2>Social Media Links</h2>
        <p><a href="https://facebook.com">Facebook</a></p>
        <p><a href="https://instagram.com">Instagram</a></p>
        <p><a href="https://twitter.com">Twitter</a></p>
      </section>
    </footer>
  );
}

export default Footer;
