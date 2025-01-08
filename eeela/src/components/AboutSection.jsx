import React from "react";
import "../Styles/AboutSection.css";
import banner from "../assets/about banner1.png";

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container text-center">
        <h2 className="mb-2">About Eeela</h2>
        <p>
          Eeela by SKYi, is dedicated to providing high quality, degradable and
          compostable solutions to support sustainable living. Our range of
          products and solutions ensures contribution to the healthier Earth
          while meeting daily needs. Our goal is to create a healthier planet by
          replacing everyday plastic products with everyday compostable and
          degradable products. We are an innovation-led company that
          manufactures bio-compostable polymers and products. We have our very
          own patented technology to design, develop and manufacture sustainable
          polymer materials as per the end use. Our vision is to be a global
          technology leader and a solution provider for sustainable polymer
          materials and solutions and work towards a greener planet.
        </p>
      </div>
      <img src={banner} alt="About Eeela Banner" />
    </section>
  );
};

export default AboutSection;
