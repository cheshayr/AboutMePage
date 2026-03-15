import React from "react";
import { motion } from "framer-motion";
import { FaWrench, FaClock, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import "../assets/styles/why.css";

const reasons = [
  { icon: <FaWrench />, title: "Expert Mechanics", desc: "Highly trained professionals for every car model." },
  { icon: <FaClock />, title: "Quick Turnaround", desc: "We value your time. Speed meets quality here." },
  { icon: <FaShieldAlt />, title: "Warranty Guaranteed", desc: "We stand behind our work with service warranties." },
  { icon: <FaCheckCircle />, title: "Affordable Pricing", desc: "Top-tier service that doesn't break the bank." }
];

const WhyChooseUs = () => {
  return (
    <section className="why">
      <h2>Why Choose Tierodman?</h2>
      <div className="why-grid">
        {reasons.map((item, index) => (
          <motion.div 
            key={index} className="why-card"
            whileHover={{ y: -10 }}
          >
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;