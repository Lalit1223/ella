import React from "react";
import "../Styles/AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Eeela</h2>
      <p>
        Eeela is committed to creating innovative, compostable solutions that
        contribute to a greener planet. Our products are designed with the
        environment in mind, helping to reduce waste and promote sustainability.
      </p>
      <img src="/about-image.jpg" alt="About Eeela" />
    </section>
  );
};

export default AboutSection;
