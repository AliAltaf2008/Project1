import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaFacebook, FaDoorOpen } from "react-icons/fa"; // Import colored icons from react-icons
import "./contact.css";

export const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_u1z3brd", // Your EmailJS Service ID
        "template_xi465fn", // Your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "cZAOZTMBzD6IzLBlk" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully!");
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <footer id="contact-footer" className="contact-footer">
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
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
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="footer-section">
        <h4>CONNECT WITH US</h4>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/mathforless/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon instagram-icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61561167509327"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon facebook-icon" />
          </a>
          <a
            href="https://ca.nextdoor.com/business-profile/preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDoorOpen className="social-icon nextdoor-icon" />
          </a>
        </div>
        <p className="footer-note">© 2024 Math4Less. All rights reserved.</p>
      </div>
    </footer>
  );
};
