import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../assets/styles/hero.css";
import tierodShop from "../tierod-shop.png"; 

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      // Get current time specifically for Manila/Philippine Standard Time
      const manilaTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        hour: "numeric",
        hour12: false,
        weekday: "long",
      }).formatToParts(new Date());

      const hourPart = manilaTime.find(p => p.type === 'hour');
      const dayPart = manilaTime.find(p => p.type === 'weekday');

      if (hourPart && dayPart) {
        const hour = parseInt(hourPart.value);
        const day = dayPart.value;

        // Shop Hours: Mon-Sat, 8:00 AM to 5:00 PM (17:00)
        const isWorkingDay = day !== "Sunday";
        const isWorkingHour = hour >= 8 && hour < 17;

        setIsOpen(isWorkingDay && isWorkingHour);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Re-check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className="hero" 
      id="hero" // 👈 Added ID so the Navbar Logo link works
      style={{ backgroundImage: `url(${tierodShop})` }}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
    >
      <div className="hero-content">
        
        {/* Status Badge */}
        {/* <motion.div 
          className={`status-badge ${isOpen ? "open" : "closed"}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="dot"></span> {isOpen ? "OPEN NOW" : "CLOSED NOW"}
        </motion.div> */}

        {/* Minimalist Text Area */}
        <motion.div 
          className="hero-text-minimal" 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="brand-name">AutoMate</h1>
          
          <p className="main-pitch">
            Experience the future of car maintenance with <span className="highlight">AutoMate | Tierodman Auto Center</span> seamless tracking and booking system
            
          </p>

          <motion.button 
            className="booking-cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '#contact'}
          >
            Get an Estimate
          </motion.button>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Hero;