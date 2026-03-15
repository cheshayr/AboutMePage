import React from "react";
import { motion } from "framer-motion";
import "../assets/styles/about.css";
import aboutImage from "../assets/advertisement/ad4.png"; 

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <img src={aboutImage} alt="About Tierodman" />
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          At <strong>Tierodman Auto Center</strong>, we pride ourselves on expert automotive repair.
        </p>
      </div>
    </motion.section>
  );
};

export default About;