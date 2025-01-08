import React from "react";
import "../Styles/Footer.css";
import logo from "../assets/eeela 4040.png";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {/* Left Section: Inline Business Info */}
        <div className="footer-info">
          <span>
            SKYi Innovations LLP Pap 60,63,64, MIDC Chakan, Pune - 410501 INDIA
          </span>{" "}
          |<span> connect@eeela.in</span>
        </div>
        {/* Right Section: Navigation Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#sustainability">Sustainability</a>
          <a href="#resources">Resources</a>
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
