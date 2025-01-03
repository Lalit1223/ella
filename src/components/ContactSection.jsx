import React from "react";
import "../Styles/ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
