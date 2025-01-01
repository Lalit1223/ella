import React from "react";
import "../Styles/Header.css";
import logo from "../assets/eeela-logo.jpg"; // Replace with the provided logo

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Eeela Logo" className="logo" />
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#products">Products</a>
        <a href="#sustainability">Sustainability</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
