import React from "react";
import "../Styles/Footer.css";
import logo from "../assets/eeela 4040.png";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {/* Left Section: Inline Business Info */}
        <div className="footer-info">
          <span>Eeela Inc., 123 Green Street, EcoCity, Planet Earth</span> |
          <span> VAT Code: 123456789</span> |<span> Tel: +1 234 567 890</span> |
          <span> Email: info@eeela.com</span>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#sustainability">Sustainability</a>
        </div>
      </div>
      <div className="text-center mt-2">
        <p className="copyright">
          <img src={logo} alt="About Eeela Banner" /> &copy;{" "}
          {new Date().getFullYear()} Eeela. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
