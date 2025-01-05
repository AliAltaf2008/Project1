import React from "react";
import ZishenPhoto from "./zishen.png"; // Replace with actual image path
import RickPhoto from "./rick.png"; // Replace with actual image path
import AliPhoto from "./ali.png"; // Replace with actual image path
import "./tutors.css";

export const About = () => {
  const tutors = [
    {
      name: "Zishen Gong",
      role: "Algebra Specialist",
      bio: [
        "Enrolled in an enriched math course",
        "Scored Top 15% in North America on the Fermat Waterloo Math Contest",
        "Experienced Tutor",
      ],
      photo: ZishenPhoto,
    },
    {
      name: "Rick Liu",
      role: "Calculus Guru",
      bio: [
        "Was once ranked as one of the top 200 Grade 10 Kumon students in North America ",
        "Profound understanding of AP Calculus",
        "More than a year as a Kumon instructor",
      ],
      photo: RickPhoto,
    },
    {
      name: "Ali Altaf",
      role: "Coding Expert",
      bio: [
        "Advanced Programming skills in Python, Java, and React",
        "Kumon Completion Certificate",
        "More than 2 years as a Kumon instructor",
      ],
      photo: AliPhoto,
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <p className="intro">
          At <span className="highlight">Math4Less</span>, we’re passionate
          about helping students of all levels excel in mathematics and build
          the confidence they need to succeed academically and beyond. Based in
          Richmond, BC, our mission is to make high-quality tutoring accessible
          and affordable for everyone. We believe that every student learns
          differently, and our personalized approach ensures that each
          individual receives the support they need to thrive.
        </p>
        <p className="intro">
          Our experienced tutors specialize in a wide range of mathematical
          topics, from foundational arithmetic to advanced calculus and coding.
          Whether you’re looking for one-on-one tutoring or flexible
          online learning options, Math4Less is here to accommodate your needs.
          We pride ourselves on fostering a positive and encouraging learning
          environment that inspires curiosity, critical thinking, and a genuine
          love for math.
        </p>
        <p className="closing">
          Join <span className="highlight">Math4Less</span> today and
          experience the difference that dedicated, expert tutoring can make in
          your academic journey!
        </p>
        <h3>Meet Our Tutors</h3>
        <div className="tutors">
          {tutors.map((tutor, index) => (
            <div key={index} className="tutor-card">
              <img
                src={tutor.photo}
                alt={`${tutor.name}'s photo`}
                className="tutor-photo"
              />
              <h4>{tutor.name}</h4>
              <p>
                <strong>{tutor.role}</strong>
              </p>
              <ul>
                {tutor.bio.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
