import React from "react";
import "../assets/styles/navbar.css";
// Adjust this path if your logo is in a different folder
import logo from "../tierod-logo.png"; 

const Navbar = () => {
  return (
    <header className="navbar">
      {/* 1. Logo on the left */}
      <div className="navbar-logo">
        <img src={logo} alt="Tierodman Logo" />
      </div>

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