import React from "react";
import "../Styles/Header.css";
import logo from "../assets/eeela.svg"; // Replace with the provided logo

const Header = () => {
  return (
    <header className="header nav navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a href="#home" className="navbar-brand">
          <img src={logo} alt="Eeela Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link item">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#products" className="nav-link item">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#sustainability" className="nav-link item">
                Sustainability
              </a>
            </li>
            <li className="nav-item">
              <a href="#resources" className="nav-link item item">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link item">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
