// Navbar.jsx
import React, { useState } from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
          <rect x="8" y="4" width="6" height="28" fill="white" />
          <rect x="24" y="4" width="6" height="28" fill="white" />
          <circle cx="19" cy="8" r="4" fill="white" />
          <circle cx="36" cy="28" r="4" fill="white" />
        </svg>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-button ${active === item.id ? "active" : ""}`}
            onClick={() => {
              setActive(item.id);
              setMenuOpen(false); 
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Hear Me */}
      <div className="contact-wrapper">
        <button className="contact-btn">Hear Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
