import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>AutoMate</h3>
          <p>Superior service at an affordable price.</p>
        </div>
        
        <div className="footer-nav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com/tierodmanautocenter" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="#contact"><FaEnvelope /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tierodman Auto Center</span>
        <span className="location">Quezon City, PH</span>
      </div>
    </footer>
    
  );
};

export default Footer;