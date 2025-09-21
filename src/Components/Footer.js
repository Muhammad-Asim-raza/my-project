import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <section aria-labelledby="footer-nav">
        <h2 id="footer-nav">Navigation</h2>
        <ul>
          <li><Link to="/" aria-label="Go to Home Page">Home</Link></li>
          <li><a href="#about" aria-label="Learn About Us">About</a></li>
          <li><Link to="/booking" aria-label="Reserve a Table">Booking</Link></li>
          <li><a href="#menu" aria-label="View Menu">Menu</a></li>
        </ul>
      </section>

      <section aria-labelledby="footer-contact">
        <h2 id="footer-contact">Contact</h2>
        <address>
          <p>Chicago</p>
          <p>Phone: <a href="tel:1234567890">123-456-7890</a></p>
          <p>Email: <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></p>
        </address>
      </section>

      <section aria-labelledby="footer-social">
        <h2 id="footer-social">Social Media Links</h2>
        <ul>
          <li><a href="https://facebook.com" aria-label="Visit us on Facebook">Facebook</a></li>
          <li><a href="https://instagram.com" aria-label="Visit us on Instagram">Instagram</a></li>
          <li><a href="https://twitter.com" aria-label="Visit us on Twitter">Twitter</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;



