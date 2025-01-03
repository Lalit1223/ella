import React from "react";
import "../Styles/SustainabilitySection.css";
import banner from "../assets/sus3.jpg";

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="sustainability-section">
      <div className="container">
        <h2>Sustainability</h2>
        <p>
          At Eeela, we focus on reducing waste and supporting a greener planet.
          Our products are designed to decompose naturally, leaving a minimal
          carbon footprint. Our choices are always aimed at minimizing our
          environmental impact, from the materials design, to the supply chain,
          in the production of containers and their disposal. Also in this
          fields we are at the forefront with 100% LED lighting and brightness
          and presence control. Innovations on proprietary production systems
          and air conditioning & cooling systems have allowed us to reduce the
          consumption of electricity per unit produced by 54% compared to 2018.
          Our buildings are designed according to bioclimatic criteria to reduce
          energy consumption for the lighting and air conditioning at its root.
        </p>
      </div>
      <div className="banner-container">
        <img
          src={banner}
          alt="Sustainability Banner"
          className="banner-image"
        />
      </div>
    </section>
  );
};

export default SustainabilitySection;
