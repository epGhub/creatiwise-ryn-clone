// components/FAQSection.jsx
import React from "react";
import "./styles/FAQSection.css";

const faqs = [
  {
    question: "Where is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
  },
  {
    question: "What tools and software do you use for UX design?",
  },
  {
    question: "How do you measure the success of your UX designs?",
  }
];

const FAQSection = () => {
  return (
    <section className="faq" id="faq">
      <h2 className="faq-title"> <img src="/imgs/expertiseLogo.svg" alt="Wavefun" /> Frequently asked questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
