import React from "react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductSection";
import SustainabilitySection from "./components/SustainabilitySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";
import HeroSection from "./components/HeroSection";
import ProductCarousel from "./components/ProductCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Resources from "./components/Resources";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ProductCarousel />
      <SustainabilitySection />
      <Resources />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
