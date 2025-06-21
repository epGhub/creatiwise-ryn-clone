
import React from "react";
import "./styles/WorksSection.css";

const projects = [
  {
    title: "Analysis Application",
    description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["FINTECH", "UIX"],
    image: "/imgs/AnalysisCard.png"
  },
  {
    title: "Fortknox Application",
    description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["MOBILE", "WEB"],
    image: "/imgs/FortnCard.png"
  },
  {
    title: "Zenocide Application",
    description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["APP", "WEB"],
    image: "/imgs/ZincoidCard.png"
  }
];

const WorksSection = () => {
  return (
    <section className="works-section">
      <div className="works-header">
        <h2><img src="/imgs/expertiseLogo.svg" alt="star" /> Works</h2>
        <a href="#">view all</a>
      </div>

      <div className="works-list">
        {projects.map((project, index) => (
          <div className="work-card" key={index}>
            <div className="work-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="work-details">
              <div className="work-details-top">
              <span className="work-title">{project.title}</span>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              </div>
              <button className="case-study-btn">View Case Study</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
