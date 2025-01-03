import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <p>&copy; {new Date().getFullYear()} Eeela. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
