import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../assets/styles/hero.css";
// import tierodLogo from "../tierod-logo.png"; // We'll move the logo focus for a minimal design
import tierodShop from "../tierod-shop.png"; // We'll use the background image

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // ... checkStatus logic remains the same ...
    const checkStatus = () => {
      const manilaTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        hour: "numeric",
        hour12: false,
        weekday: "long",
      }).formatToParts(new Date());

      const hour = parseInt(manilaTime.find(p => p.type === 'hour').value);
      const day = manilaTime.find(p => p.type === 'weekday').value;

      // Logic: Mon-Sat, 8 AM (8) to 5 PM (17)
      const workingDay = day !== "Sunday";
      const workingHour = hour >= 8 && hour < 17;

      setIsOpen(workingDay && workingHour);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Re-check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      className="hero" 
      style={{ backgroundImage: `url(${tierodShop})` }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
    >
      <div className="hero-content">
        {/* Status Badge - We keep this important trust signal */}
        <motion.div 
          className={`status-badge ${isOpen ? "open" : "closed"}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="dot"></span> {isOpen ? "OPEN NOW" : "CLOSED NOW"}
        </motion.div>

        {/* --- MODIFIED CORE TEXT AREA --- */}
        <motion.div className="hero-text-minimal" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5 }}>
          <h1 className="brand-name">AutoMate</h1>
          
          <p className="main-pitch">
            Your trusted Quezon City choice for <span className="highlight">expert car repairs</span> and quality parts. 
            Superior service, made affordable.
          </p>

          {/* New, clearer Primary Call-to-Action */}
          <button className="booking-cta-btn">
            Get an Estimate
          </button>
        </motion.div>
        {/* --- MODIFIED CORE TEXT AREA --- */}
      </div>
    </motion.section>
  );
};

export default Hero;