import React from "react";
import "../Styles/ProductsSection.css";

import carryBagImage from "../assets/4.png";
import trashBagImage from "../assets/5.png";
import medicalWasteBagImage from "../assets/1.png";
import nurseryBagImage from "../assets/3.png";
import cutleryImage from "../assets/6.png";
import glassStrawImage from "../assets/2.png";

const ProductsSection = () => {
  return (
    <section id="products" className="products-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Product Categories</h2>
        <div className="row g-4">
          <div className="col-6 col-md-4">
            <div className="product card border-0 shadow h-100">
              <img
                src={carryBagImage}
                className="card-img-top"
                alt="Carry Bags"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Carry Bags</h3>
                <p className="card-text">
                  Eco-friendly and durable bags for everyday use.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="product card border-0 shadow h-100">
              <img
                src={trashBagImage}
                className="card-img-top"
                alt="Trash Bags"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Trash Bags</h3>
                <p className="card-text">
                  Compostable trash bags designed for efficient waste
                  management.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="product card border-0 shadow h-100">
              <img
                src={medicalWasteBagImage}
                className="card-img-top"
                alt="Medical Waste Bags"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Medical Waste Bags</h3>
                <p className="card-text">
                  Safe and eco-friendly solutions for disposing of medical
                  waste.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="product card border-0 shadow h-100">
              <img
                src={nurseryBagImage}
                className="card-img-top"
                alt="Nursery Bags"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Nursery Bags</h3>
                <p className="card-text">
                  Perfect for gardening and plantation purposes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="product card border-0 shadow h-100">
              <img src={cutleryImage} className="card-img-top" alt="Cutlery" />
              <div className="card-body text-center">
                <h3 className="card-title">Cutlery</h3>
                <p className="card-text">
                  Biodegradable spoons, forks, and knives for all your dining
                  needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="product card border-0 shadow h-100">
              <img
                src={glassStrawImage}
                className="card-img-top"
                alt="Glass and Straw"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Glass and Straw</h3>
                <p className="card-text">
                  Sustainable glass and straw options for beverages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
