import React from "react";
import "../Styles/ProductsSection.css";

const ProductsSection = () => {
  return (
    <section id="products" className="products-section">
      <h2>Our Product Lines</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="product">
              <h3>Compostable Garbage Bags</h3>
              <p>Available in various sizes for multiple uses.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product">
              <h3>Compostable Food Containers</h3>
              <p>Perfect for storing food while being eco-friendly.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product">
              <h3>Compostable Wrapping Paper</h3>
              <p>Ideal for wrapping cheese, fish, meat, and delicatessen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
