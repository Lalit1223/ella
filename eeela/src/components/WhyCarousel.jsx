import React, { useState } from "react";
import Slider from "react-slick";
import "../Styles/WhyCarousel.css";

// Sample images for the carousel (replace with actual assets)
import why1 from "../assets/why1.png";
import why2 from "../assets/why2.png";
import why3 from "../assets/why3.png";
import why4 from "../assets/why4.png";
import why5 from "../assets/why5.png";
import why6 from "../assets/why6.png";
import why7 from "../assets/why7.png";

const WhyCarousel = () => {
  const [autoplay, setAutoplay] = useState(false); // Control autoplay

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay, // Controlled by state
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="why-carousel-section"
      onMouseEnter={() => setAutoplay(true)} // Start autoplay on hover
      onMouseLeave={() => setAutoplay(false)} // Stop autoplay on leave
      onClick={() => setAutoplay(true)} // Start autoplay on click
    >
      <h2 className="text-center mb-4">Why Choose Eeela and Bio-Polymers?</h2>
      {/* Use key to reinitialize the carousel */}
      <Slider {...sliderSettings} key={autoplay}>
        <div className="carousel-item">
          <img src={why1} alt="Why Bio-Polymers 1" />
        </div>
        <div className="carousel-item">
          <img src={why2} alt="Why Eeela 2" />
        </div>
        <div className="carousel-item">
          <img src={why3} alt="Why Bio-Polymers 3" />
        </div>
        <div className="carousel-item">
          <img src={why4} alt="Why Bio-Polymers 4" />
        </div>
        <div className="carousel-item">
          <img src={why5} alt="Why Eeela 5" />
        </div>
        <div className="carousel-item">
          <img src={why6} alt="Why Bio-Polymers 6" />
        </div>
        <div className="carousel-item">
          <img src={why7} alt="Why Bio-Polymers 7" />
        </div>
        <div className="carousel-item">
          <img src={why1} alt="Why Eeela 8" />
        </div>
      </Slider>
    </div>
  );
};

export default WhyCarousel;
