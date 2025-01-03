import React from "react";
import "../Styles/Carousel.css";
import product1 from "../assets/ca (1).png";
import product2 from "../assets/ca (2).png";
import product3 from "../assets/ca (4).png";
import product4 from "../assets/9 (1).png";
import product5 from "../assets/9 (2).png";
import product6 from "../assets/ca (3).png";
import product7 from "../assets/9 (3).png";
import product8 from "../assets/9 (4).png";
import product9 from "../assets/1.png";

const ProductCarousel = () => {
  return (
    <section id="carousel" className="carousel-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Explore Our Products</h2>
        <div
          id="productCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={product1} className="d-block w-100" alt="Product 1" />
            </div>
            <div className="carousel-item">
              <img src={product2} className="d-block w-100" alt="Product 2" />
            </div>
            <div className="carousel-item">
              <img src={product3} className="d-block w-100" alt="Product 3" />
            </div>
            <div className="carousel-item">
              <img src={product4} className="d-block w-100" alt="Product 4" />
            </div>
            <div className="carousel-item">
              <img src={product5} className="d-block w-100" alt="Product 5" />
            </div>
            <div className="carousel-item">
              <img src={product6} className="d-block w-100" alt="Product 6" />
            </div>
            <div className="carousel-item">
              <img src={product7} className="d-block w-100" alt="Product 7" />
            </div>
            <div className="carousel-item">
              <img src={product8} className="d-block w-100" alt="Product 8" />
            </div>
            <div className="carousel-item">
              <img src={product9} className="d-block w-100" alt="Product 9" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
