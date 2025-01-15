import React from "react";
import "../Styles/SustainabilitySection.css";
import banner from "../assets/eeela earth.png";

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="sustainability-section">
      <div className="container">
        <h2 className="mb-2 text-center">Sustainability</h2>
        <p>
          “Development that meets the needs of the present without compromising
          the ability of future generations to meet their own needs “ (World
          Commission of Environment and Development, 1987)
        </p>
        <p>
          With our Philosophy – ‘Nature as Guideline, Plastics as Passion &amp;
          Customers as Partners’, we aim to be a global technology leader and a
          solution provider for sustainable polymer materials and work towards a
          greener planet.
        </p>
      </div>
      <img src={banner} alt="Sustainability Banner" className="banner-image" />
    </section>
  );
};

export default SustainabilitySection;
