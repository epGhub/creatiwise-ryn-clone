// components/Footer.jsx
import React from "react";
import "./styles/Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-marquee">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i}>
              FLOW
              <img src="/imgs/expertiseLogo.svg"  alt="star" className="star-icon" />
              FIGMA
              <img src="/imgs/expertiseLogo.svg"  alt="star" className="star-icon" />
              DESIGNER
              <img src="/imgs/expertiseLogo.svg"  alt="star" className="star-icon" />
              DEVELOPER
              <img src="/imgs/expertiseLogo.svg"  alt="star" className="star-icon" />
            </span>
          ))}
        </div>
      </div>

      <h2 className="footer-title">LET’S TALK!</h2>
      <p className="footer-contact">ribasurabhashegar@gmail.com ↗</p>

      <div className="footer-bottom">
        <p>© Ribasurabha 2025</p>
        <div className="links">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
