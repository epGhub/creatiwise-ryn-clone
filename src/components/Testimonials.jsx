import React from "react";
import "./styles/Testimonials.css";

const TestimonialSection = () => {
  return (
    <section className="testimonial" id="testimonial">
      <h2 className="testimonial-title"> <img src="/imgs/expertiseLogo.svg" alt="Wavefun" /> What they say</h2>
      <div className="testimonial-content">
        <div className="user-info">
          <img src="/imgs/userpic.png" alt="Floyd Miles" />
          <p>Floyd Miles<br /><span>eBay</span></p>
        </div>
        <img src="/imgs/quotesPic.svg" alt="" />
        <blockquote>
          Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers.
        </blockquote>
      </div>

      <div className="nav-buttons">
        <button>←</button>
        <button>→</button>
      </div>
    </section>
  );
};

export default TestimonialSection;
