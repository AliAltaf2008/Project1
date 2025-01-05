import React, { useState } from "react";
import "./curriculum.css";

export const Curriculum = () => {
  const levels = [
    {
      grade: "M1 (Grades 4-6)",
      topics: [
        "Numbers and Operations",
        "Measurement and Geometry",
        "Patterns and Algebraic Thinking",
        "Data and Probability",
      ],
      description: "M1 lays the foundation for essential math skills, focusing on critical thinking and problem-solving.",
      link: "https://docs.google.com/spreadsheets/d/15eUIm1uM22J0OJ4G-EpscdxotbiWVQAdG-oWgndosEE/edit?usp=sharing",
    },
    {
      grade: "M2 (Grades 7-9)",
      topics: [
        "Multiplication and Division",
        "Fractions and Decimals",
        "Area & Perimeter",
        "Angles",
      ],
      description: "M2 builds on fundamental concepts and introduces more advanced topics to prepare students for higher levels.",
      link: "https://docs.google.com/spreadsheets/d/15eUIm1uM22J0OJ4G-EpscdxotbiWVQAdG-oWgndosEE/edit?usp=sharing",
    },
    {
      grade: "M3 (Grades 10-11)",
      topics: [
        "Functions and Sequences",
        "Polynomials & Algebraic Manipulations",
        "Trigonometry and Geometry",
        "Data and Probability",
      ],
      description: "M3 focuses on strengthening advanced math concepts and prepares students for college-level topics.",
      link: "https://docs.google.com/spreadsheets/d/15eUIm1uM22J0OJ4G-EpscdxotbiWVQAdG-oWgndosEE/edit?usp=sharing",
    },
    {
      grade: "M4 (AP Calculus BC)",
      topics: [
        "Advanced Functions and Logarithms",
        "Calculus",
        "Advanced Trigonometry",
        "Inferential Statistics",
      ],
      description: "M4 challenges students with complex problem-solving and in-depth analytical skills, ideal for advanced learners.",
      link: "https://docs.google.com/spreadsheets/d/15eUIm1uM22J0OJ4G-EpscdxotbiWVQAdG-oWgndosEE/edit?usp=sharing",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % levels.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? levels.length - 1 : prevIndex - 1
    );
  };

  const currentLevel = levels[currentIndex];

  return (
    <section id="curriculum" className="curriculum">
      <div className="container">
        <h2>Curriculum</h2>
        <p>Browse through each level to view its curriculum details, topics, and description.</p>
        
        <div className="level-navigation">
          <button onClick={handlePrevious} className="nav-button">
            &lt;
          </button>
          <div className="level-details">
            <h3>{currentLevel.grade}</h3>
            <div className="topics">
              <strong>Topics:</strong>
              <ul>
                {currentLevel.topics.map((topic, index) => (
                  <li key={index} className="topic-item">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="description">
              <strong>Description:</strong> {currentLevel.description}
            </div>
            <a href={currentLevel.link} target="_blank" rel="noopener noreferrer">
              View Curriculum
            </a>
          </div>
          <button onClick={handleNext} className="nav-button">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};
