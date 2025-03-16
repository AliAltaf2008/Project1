export const Services = () => {
  const services = [
    {
      title: "In-Person Tutoring",
      description: "Tailored one-on-one tutoring sessions in Richmond, BC",
      paragraph:
        "Our in-person tutoring ensures personalized attention for students, prioritizing conceptual math learning rather than excessive practice. Get started today by booking a free assessment with us and then paying $25 per lesson (Flexible rates)",
    },
    {
      title: "Online Learning",
      description: "Free Math and Coding Videos on Youtube and Edx",
      paragraph:
        "Experience the convenience of online learning with our expert tutors. Learn from anywhere with interactive lessons and comprehensive resources. Join us on our Youtube or Edx platform to enjoy free, high-quality content in the comfort of your own home",
    },
    {
      title: "Affordable Pricing",
      description: "High-quality tutoring at budget-friendly rates.",
      paragraph:
        "At Math4Less, we believe in making quality education accessible. Enjoy top-notch tutoring at rates that fit your budget at just $25 per hour for in-person sessions supplemented by our free online resources",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-content">
              <h3>{service.title}</h3>
              <p className="description">{service.description}</p>
              <p className="paragraph">{service.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
