import { AiFillYoutube } from "react-icons/ai";
import { SiEdx } from "react-icons/si"; // Import EdX logo

export const OnlineLearning = () => {
  const platforms = [
    {
      title: "YouTube Channel",
      description: "Explore free lessons and resources on our YouTube channel.",
      logo: <AiFillYoutube size={50} color="#FF0000" />, // Customize size and color
      link: "https://www.youtube.com/@MathforLess",
      buttonText: "Visit YouTube",
    },
    {
      title: "EdX Platform",
      description: "Access comprehensive courses and materials on EdX.",
      logo: <SiEdx size={50} color="#2E86C1" />, // Customize size and color
      link: "https://www.udemy.com/user/rick-liu-19/",
      buttonText: "Explore EdX",
    },
  ];

  return (
    <section id="online-learning" className="online-learning">
      <div className="container">
        <h2>Online Learning Platforms</h2>
        <div className="platforms">
          {platforms.map((platform, index) => (
            <div key={index} className="platform-card">
              <div className="platform-logo">{platform.logo}</div> {/* Render logo directly */}
              <h3>{platform.title}</h3>
              <p>{platform.description}</p>
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-button"
              >
                {platform.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
