import React from "react";
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
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
    <Slider {...sliderSettings}>
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
        <img src={why4} alt="Why Bio-Polymers 3" />
      </div>
      <div className="carousel-item">
        <img src={why5} alt="Why Eeela 3" />
      </div>
      <div className="carousel-item">
        <img src={why6} alt="Why Bio-Polymers 3" />
      </div>
      <div className="carousel-item">
        <img src={why7} alt="Why Bio-Polymers 3" />
      </div>
      <div className="carousel-item">
        <img src={why1} alt="Why Eeela 3" />
      </div>
    </Slider>
  );
};

export default WhyCarousel;
