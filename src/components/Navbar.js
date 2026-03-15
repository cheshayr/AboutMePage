import React from "react";
import "../assets/styles/navbar.css";
import logo from "../tierod-logo.png"; 

const Navbar = () => {
  return (
    <header className="navbar">
      {/* 1. Logo now acts as a link to the hero section */}
      <a href="#hero" className="navbar-logo">
        <img src={logo} alt="Tierodman Logo" />
      </a>

      {/* 2. Navigation on the right */}
      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#promo">App</a>
      </nav>
    </header>
  );
};

export default Navbar;