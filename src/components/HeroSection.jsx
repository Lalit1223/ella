import React from "react";
import "../Styles/Hero.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero d-flex align-items-center text-center">
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to Eeela</h1>
          <p>Your partner in eco-friendly, compostable products.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
