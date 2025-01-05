import React, { useState, useEffect } from "react";
import logo from "./Math4Less.png"; // Ensure correct path
import home1 from "./home1.png";
import home2 from "./home2.png";
import "./styles.css";

export const HomePage = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [blink, setBlink] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const phrases = ["Personalized Learning", "Affordable Tutoring", "Expert Tutors"];
  const typingSpeed = isDeleting ? 100 : 150;

  const images = [home1, home2, logo];

  useEffect(() => {
    // Typing animation logic
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

  useEffect(() => {
    // Cursor blink logic
    const cursorBlinkTimer = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(cursorBlinkTimer);
  }, []);

  useEffect(() => {
    // Slideshow logic
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(imageTimer);
  }, [images.length]);

  return (
    <section id="home" className="home-page">
      {/* Full-Width Slideshow */}
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slideshow-image ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Content below slideshow */}
      <div className="content">
        <h1>
          {text}
          <span className="cursor">{blink ? "|" : " "}</span>
        </h1>
        <i>
          <p>
            Expert math tutoring tailored to your needs. Achieve excellence with
            Math4Less
          </p>
        </i>
        <a href="https://form.jotform.com/242861744780262" target="_blank" rel="noopener noreferrer">
          <button>Sign Up Today</button>
        </a>
      </div>
    </section>
  );
};
