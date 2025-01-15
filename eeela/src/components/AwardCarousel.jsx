import React, { useState } from "react";
import Slider from "react-slick";
import "../Styles/AwardCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images for the carousel (replace with your images)
import award1 from "../assets/award1.jpg";
import award2 from "../assets/award2.jpg";
import award3 from "../assets/award3.png";
import award4 from "../assets/award4.png";
import award5 from "../assets/award5.png";
import award6 from "../assets/award6.png";
import award7 from "../assets/award7.jpg";
import award8 from "../assets/award8.png";
import award9 from "../assets/award9.jpg";

const AwardsCarousel = () => {
  const [autoplay, setAutoplay] = useState(false); // State to control autoplay

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: autoplay, // Controlled by state
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show one slide on smaller screens
        },
      },
    ],
  };

  const captions = [
    "CPCB Certified as per Indian Standards ISO:17088 for Compostable Plastics",
    "Certified ISO 9001:2005 Company. Delivered by the TÜV SÜD Body, guarantees ISO standards by the company",
    "Certified ‘OK Compost’ by globally recognized TÜV Austria Belgium NV",
    "Certified ‘Compostable’ as per DIN EN13432 as per European German Testing Standards",
    "Certified ‘Compostable’ as per DIN EN13432 as per European German Testing Standards",
    "Certified BPI Compostable as per specifications established in American Society for Testing and Materials standard ASTM D6400 and/or D6868",
    "Recognized as ‘Innovative Technology’ by TIFAC, Department of Science and Technology, Govt. of India",
    "Listed in ‘Top 26 Most Innovative Company’ at the CII Industrial Innovation Summit organized by Confederation of Indian Industries (CII) & Department of Industrial Promotion and Policy (DIPP), Govt. of India",
    "Listed as ‘Fastest Growing Indian Company Excellence Award 2017’ by International Achievers Conference",
  ];

  const images = [
    award1,
    award2,
    award3,
    award4,
    award5,
    award6,
    award7,
    award8,
    award9,
  ];

  return (
    <div
      className="awards-carousel-section"
      onMouseEnter={() => setAutoplay(true)} // Start autoplay on hover
      onMouseLeave={() => setAutoplay(false)} // Stop autoplay on leaving
      onClick={() => setAutoplay(true)} // Start autoplay on click
    >
      <h2 className="text-center">Awards & Certifications</h2>
      {/* Key added to reinitialize the Slider */}
      <Slider {...settings} key={autoplay}>
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <div className="award-card">
              <img src={image} alt={`Award ${index + 1}`} />
              <p className="caption">{captions[index]}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AwardsCarousel;
