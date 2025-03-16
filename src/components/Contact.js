import React from "react";

export const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Submit</button>
      </form>
    </section>
  );
};
