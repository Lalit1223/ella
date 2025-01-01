import React from "react";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductSection";
import SustainabilitySection from "./components/SustainabilitySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import "./App.css";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SustainabilitySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
