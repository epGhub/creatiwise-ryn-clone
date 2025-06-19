import React from 'react';
import './styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="header-text">
          <span>
          <span> I AM A </span>  <img src="/imgs/menLogoHero.jpg" alt="Hero Icon" /><span>  FREELANCE </span> 
           <span>  DESIGNER </span> <img src="/imgs/banerHero.png" alt="Hero Banner" /> <span> FROM </span>  
           <span>  SAN FRANCISCO </span> 
          </span>
        </div>
        


        <div className="description-sec">
          <span className='dorodesign'><img src="/imgs/doroLogo.svg"  alt="Dorodesign"  className='dorodesignLogo'/>doradesign</span>
          <span><img src="/imgs/wavefunLogo.svg" alt="Wavefun" /></span>
          <span><img src="/imgs/SilsLogo.svg" alt="Silsila" /></span>
          <span className='portfolio-text'>
            Welcome to my portfolio. Here, artistry meets functionality. <br />
            Dive into a curated showcase of distinctive branding and <br />
            web designs, each crafted to captivate and inspire.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
