import React from "react";
import { FaHome, FaInfoCircle, FaTools, FaBook, FaClipboard, FaPhone, FaStar } from "react-icons/fa"; // Import additional icon
import { PiGraduationCapFill } from "react-icons/pi";
import "./NavBar.css";

export const NavBar = () => {
  const sections = [
    { id: "home", icon: <FaHome />, alt: "Home" },
    { id: "about", icon: <FaInfoCircle />, alt: "About Us" },
    { id: "services", icon: <FaTools />, alt: "Services" },
    { id: "online-learning", icon: <PiGraduationCapFill />, alt: "Online Learning" },
    { id: "curriculum", icon: <FaClipboard />, alt: "Curriculum" },
    { id: "testimonials", icon: <FaStar />, alt: "Testimonials" },
    { id: "contact-footer", icon: <FaPhone />, alt: "Contact Us" }, // Ensure id matches
  ];

  const handleScroll = (id) => {
    console.log(`Scrolling to section: ${id}`); // Debugging
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Section with ID "${id}" not found.`);
      }
    }
  };

  return (
    <div className="floating-navbar">
      {sections.map((section) => (
        <div
          key={section.id}
          className="navbar-icon"
          onClick={() => handleScroll(section.id)}
        >
          <span className="icon">{section.icon}</span>
        </div>
      ))}
    </div>
  );
};
