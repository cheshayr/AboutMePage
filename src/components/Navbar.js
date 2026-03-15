import React from "react";
import "../assets/styles/navbar.css";
import logo from "../tierod-logo.png"; 

const Navbar = () => {
  return (
    <header className="navbar">
      <a href="#hero" className="navbar-logo">
        <img src={logo} alt="Tierodman Logo" />
      </a>

      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        {/* Added the 'nav-cta' class here */}
        <a href="#promo" className="nav-cta">Download App</a>
      </nav>
    </header>
  );
};

export default Navbar;