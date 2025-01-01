import React from "react";
import "../Styles/SustainabilitySection.css";

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="sustainability-section">
      <h2>Our Commitment to Sustainability</h2>
      <p>
        Eeela’s products are made from renewable raw materials, produced in zero
        CO2 emission plants, and contribute to the circular economy.
      </p>
      <img src="/sustainability-image.jpg" alt="Sustainability" />
    </section>
  );
};

export default SustainabilitySection;
