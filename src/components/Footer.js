import React from "react";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Tierodman Auto Center</h3>
      <p>© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;