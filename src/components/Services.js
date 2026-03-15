import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/styles/services.css";

const services = [
  { title: "General Auto Repair", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70" },
  { title: "Parts & Accessories", img: "https://images.unsplash.com/photo-1571607388263-df6b4f3afaae" },
  { title: "Engine Diagnostics", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267d5" },
  { title: "Tire & Brake Services", img: "https://images.unsplash.com/photo-1596995804697-8daee17dd80d" },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expanded) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [expanded]);

  return (
    <motion.section className="services" id="services" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
      <h2>Our Services</h2>
      <div className="slider">
        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div className="expanded-services" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.button className="close-btn" onClick={() => setExpanded(false)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>✕</motion.button>
              <div className="services-grid">
                {services.map((service) => (
                  <motion.div key={service.title} className="service-card expanded" layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
                    <img src={service.img} alt={service.title} />
                    <h3>{service.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key={current} className="slide service-card" layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
              <img src={services[current].img} alt={services[current].title} />
              <h3>{services[current].title}</h3>
              <motion.button className="see-all-btn" onClick={() => setExpanded(true)} whileHover={{ scale: 1.05 }}>See All Services</motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Services;