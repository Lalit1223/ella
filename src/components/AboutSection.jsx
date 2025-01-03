import React from "react";
import "../Styles/AboutSection.css";
import banner from "../assets/about banner.png";

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container text-center">
        <h2 className="mb-4">About Eeela</h2>
        <p>
          Eeela is dedicated to providing high-quality, compostable products
          that support sustainable living. Our range of products ensures that
          you contribute to a healthier planet while meeting your daily needs.
        </p>
      </div>
      <img src={banner} alt="About Eeela Banner" />
    </section>
  );
};

export default AboutSection;
