import React, { useState, useEffect } from "react";

export const Banner = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Affordable Math Help", "Online Learning", "Expert Guidance"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, 200);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTimeout(() => {}, period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="container">
        <h1>
          Making Math Affordable and Accessible
          <br />
          <span className="dynamic-text">{text}</span>
        </h1>
        <p>
          Expert math tutoring for students of all levels, in-person or online.
        </p>
        <button>Learn More</button>
      </div>
    </section>
  );
};
