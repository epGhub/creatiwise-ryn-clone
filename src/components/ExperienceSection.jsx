// components/ExperienceSection.jsx
import React from "react";
import "./styles/ExperienceSection.css";

const experienceData = [
  {
    role: "Lead Product Designer",
    company: "Fortknox",
    period: "Jan 2021 – Dec 2023"
  },
  {
    role: "Intern Designer",
    company: "OmniStudio",
    period: "Jan 2020 – Dec 2020"
  },
  {
    role: "UI Designer",
    company: "DoodleApp",
    period: "Jul 2019 – Dec 2019"
  },
  {
    role: "Frontend Developer",
    company: "OpacityAuthor",
    period: "Jan 2019 – Jun 2019"
  }
];

const ExperienceSection = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="experience-title"><img src="/imgs/expertiseLogo.svg" alt="star" /> Experience</h2>
      <div className="experience-table">
        {experienceData.map((exp, index) => (
          <div className="experience-row" key={index}>
            <div className="role">{exp.role}</div>
            <div className="company-period">
              <div className="company">{exp.company}</div>
              <div className="period">{exp.period}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
