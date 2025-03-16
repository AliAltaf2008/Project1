import React, { useState, useEffect } from "react";
import home1 from "./home1.png";
import home2 from "./home2.png";
import home3 from "./home3.png";
import logoDesktop from "./Math4Less.png"; // Desktop logo
import logoMobile from "./MathMobile.png"; // Mobile logo
import "./styles.css";

export const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [blink, setBlink] = useState(true);

  const phrases = ["Personalized Learning", "Affordable Tutoring", "Expert Tutors"];
  const typingSpeed = isDeleting ? 100 : 150;

  // Update `isMobile` on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically set images for slideshow
  const images = isMobile ? [home1, home3] : [home1, home2];

  // Slideshow logic
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(imageTimer);
  }, [images]);

  // Typing animation logic
  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prevLoop) => prevLoop + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, loopNum]);

  // Cursor blinking
  useEffect(() => {
    const cursorBlinkTimer = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(cursorBlinkTimer);
  }, []);

  console.log("Logo Path:", isMobile ? logoMobile : logoDesktop); // Debugging
  console.log("Slideshow Images:", images); // Debugging

  return (
    <section id="home" className="home-page">
      {/* Full-Width Slideshow */}
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slideshow-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          />
        ))}
      </div>

      {/* Logo */}
      <div className="logo-container">
        <img
          src={isMobile ? logoMobile : logoDesktop}
          alt="Math4Less Logo"
          className="logo"
        />
      </div>

      {/* Content below slideshow */}
      <div className="content">
        <h1>
          {text}
          <span className="cursor">{blink ? "|" : ""}</span>
        </h1>
        <i>
          <p>
            Expert math tutoring tailored to your needs. Achieve excellence with
            Math4Less.
          </p>
        </i>
        <a
          href="https://form.jotform.com/242861744780262"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Sign Up Today</button>
        </a>
      </div>
    </section>
  );
};
