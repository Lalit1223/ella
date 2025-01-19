import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/ContactSection.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaShoppingCart,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/email/send-message`, // Use Vite environment variable
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", { position: "top-right" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(
          result.error || "Failed to send message. Please try again.",
          { position: "top-right" }
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Connect</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <ToastContainer />
        <div className="social-icons mt-4">
          <a
            href="https://www.facebook.com/share/1FeChTeZ6Y/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/eeela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="http://www.youtube.com/@EeelaBySKYi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            className="cart-icon"
            href="https://amazon.in/dp/B0DKP3JY41"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
