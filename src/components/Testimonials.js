import React, { useState, useEffect } from "react";
import studentPic1 from "./studentpic1.jpeg"; // Replace with actual path
import studentPic2 from "./studentpic2.jpeg"; // Replace with actual path
import studentPic3 from "./studentpic3.jpeg"; // Replace with actual path
import "./testimonials.css";

const testimonialsData = [
  {
    name: "Avigail Chen (Grade 7)",
    feedback:
      "I love having affordable and high-quality tutoring. My grades improved significantly after just a few sessions!",
    rating: 5,
    image: studentPic1,
  },
  {
    name: "Quinn Chen (Grade 3)",
    feedback:
      "I sometimes have a hard time focusing; however, Math4Less makes their lessons engaging and interactive which keeps me interested.",
    rating: 4.5,
    image: studentPic2,
  },
  {
    name: "Luella Liu (Grade 8)",
    feedback:
      "The online learning resources are excellent. I can learn at my own pace and revisit lessons anytime.",
    rating: 4,
    image: studentPic3,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 500); // Matches the fade animation duration
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { name, feedback, rating, image } = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="testimonials">
      <div
        className={`testimonial-slide ${fade ? "fade-in" : "fade-out"}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="testimonial-content">
          <h3 className="name">- {name}</h3>
          <p className="feedback">"{feedback}"</p>
          <div className="rating">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </div>
        </div>
      </div>
    </section>
  );
};
