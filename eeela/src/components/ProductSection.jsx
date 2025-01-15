import React from "react";
import "../Styles/ProductsSection.css";

import carryBagImage from "../assets/4.png";
import trashBagImage from "../assets/5.png";
import medicalWasteBagImage from "../assets/1.png";
import nurseryBagImage from "../assets/3.png";
import cutleryImage from "../assets/6.png";
import glassStrawImage from "../assets/2.png";
import foodContainerImage from "../assets/container.png";
import custumizedImage from "../assets/Home-slider-4.png";
import industrialPack from "../assets/industrial.png";

const ProductsSection = () => {
  return (
    <section id="products" className="products-section py-5">
      <div className="container">
        <h2 className="text-center mb-3">Our Product Categories</h2>
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
                <h3 className="card-title">Garbage Bags</h3>
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
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="product card border-0 shadow h-100">
              <img
                src={foodContainerImage}
                className="card-img-top"
                alt="Nursery Bags"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Food Containers</h3>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="product card border-0 shadow h-100">
              <img src={cutleryImage} className="card-img-top" alt="Cutlery" />
              <div className="card-body text-center">
                <h3 className="card-title">Cutlery</h3>
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
                <h3 className="card-title">Glass, Cup, Lid &amp; Straw</h3>
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
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="product card border-0 shadow h-100">
              <img
                src={industrialPack}
                className="card-img-top"
                alt="Nursery Bags"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Industrial Packaging</h3>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="product card border-0 shadow h-100">
              <img
                src={custumizedImage}
                className="card-img-top"
                alt="Nursery Bags"
              />
              <div className="card-body text-center">
                <h3 className="card-title">Customized Solutions</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
