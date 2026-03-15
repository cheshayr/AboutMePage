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
    <section className="why" id="why">
      <div className="why-inner">
        <header className="why-header">
          <span className="why-tag">Core Values</span>
          <h2 className="why-title">Precision Meets <br/> Reliability.</h2>
        </header>
        
        {/* New centered wrapper */}
        <div className="why-center-wrapper">
          <div className="why-grid-standard">
            {reasons.map((item, index) => (
              <motion.div 
                key={index} 
                className="why-node"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="why-node-content">
                  <span className="why-node-num">0{index + 1}</span>
                  <div className="why-node-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <div className="divider-line"></div>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;