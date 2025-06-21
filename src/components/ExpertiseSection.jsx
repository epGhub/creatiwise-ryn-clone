
import React from "react";
import "./styles/ExpertiseSection.css";


const expertiseList = [
  {
    title: "Branding",
    description:
     " I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
  },
  {
    title: "UI Design",
    description:
      "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
  },
  {
    title: "UX Design",
    description:
      "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compression and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements."
  },
  {
    title: "Development",
    description:
      "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites."
  }
];

const ExpertiseSection = () => {
  return (
   
    <section className="expertise" id="expertise">
  <div className="expertise-inner">
    <h2 className="expertise-title">
      <img src="/imgs/expertiseLogo.svg" alt="Wavefun" />
      Expertise
    </h2>

    <div className="expertise-cards">
      {expertiseList.map((item, index) => (
        <div className="expertise-card" key={index}>
          <h3>
            <span className="icon"></span>{item.title}
          </h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ExpertiseSection;
