import React, { useState, useEffect, useRef } from "react";
import "../Styles/Carousel.css";
import product1 from "../assets/graphics0.1.png";
import product2 from "../assets/graphics2.png";
import product3 from "../assets/graphics3.png";
import product4 from "../assets/graphics4.png";
import product6 from "../assets/graphic6.png";
import product7 from "../assets/graphic7.png";
import product8 from "../assets/graphic8.png";

const ProductCarousel = () => {
  const [autoplay, setAutoplay] = useState(false); // Control autoplay
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide
  const carouselRef = useRef(null);

  const images = [
    product1,
    product2,
    product3,
    product4,
    product6,
    product7,
    product8,
  ];

  useEffect(() => {
    let interval;

    if (autoplay && currentSlide < images.length - 1) {
      interval = setInterval(() => {
        // Trigger the next slide
        const carousel = carouselRef.current;
        if (carousel) {
          const nextButton = carousel.querySelector(".carousel-control-next");
          if (nextButton) nextButton.click();
        }
      }, 3000); // Change slide every 3 seconds
    }

    return () => clearInterval(interval);
  }, [autoplay, currentSlide, images.length]);

  const handleSlideChange = (event) => {
    // Update the current slide index
    const activeIndex = Array.from(event.target.parentElement.children).indexOf(
      event.target
    );
    setCurrentSlide(activeIndex);
  };

  return (
    <section
      id="carousel"
      className="carousel-section py-5"
      onMouseEnter={() => setAutoplay(true)} // Start autoplay on hover
      onMouseLeave={() => setAutoplay(false)} // Stop autoplay on leave
      onClick={() => setAutoplay(true)} // Start autoplay on click
    >
      <div className="container">
        <h2 className="text-center mb-4">Explore Our Products</h2>
        <div
          id="productCarousel"
          className="carousel slide"
          ref={carouselRef}
          data-bs-interval="false"
          onSlid={handleSlideChange} // Update slide index on slide change
        >
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Product ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide="prev"
            onClick={() =>
              setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))
            }
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
            onClick={() =>
              setCurrentSlide((prev) =>
                prev < images.length - 1 ? prev + 1 : prev
              )
            }
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
