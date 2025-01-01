import React from "react";
import "../Styles/ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Get in Touch</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactSection;
