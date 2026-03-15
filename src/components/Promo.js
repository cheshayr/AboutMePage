import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/styles/promo.css";

import app1 from "../assets/advertisement/ad1.png";
import app2 from "../assets/advertisement/ad2.png";
import app3 from "../assets/advertisement/ad3.png";

const promoImages = [app1, app2, app3];

const Promo = () => {
  const [promoIndex, setPromoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promoImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="promo-section" id="promo">
      
      
      <div className="promo-container">
        <div className="promo-grid-layout">
          
          {/* Left: Text Content */}
          <div className="promo-text-side">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="promo-tag">Exclusive Beta Access</span>
              <h2 className="promo-main-title">AutoMate<span>.</span></h2>
              <p className="promo-description">
                The ultimate companion for your vehicle. Track maintenance, 
                diagnose issues, and manage repairs with a modern interface 
                designed for the next generation of car owners.
              </p>
              
              <div className="promo-button-group">
                {/* Google Play Styled Button */}
                <button className="playstore-btn">
                  <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#fff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 36.1V475.9L278.3 244.6 47 36.1zm333.3 162.7L115.6 499l319.7-183.6-55-56.6zM347.7 256.6l64.1 64.1 67.5-38.8c12.4-7.1 19-17.5 19-29.4s-6.6-22.3-19-29.4l-67.5-38.8-64.1 64.1z"/>
                  </svg>
                  <div className="btn-label">
                    <span>GET IT ON</span>
                    <strong>Google Play</strong>
                  </div>
                </button>
                
                <button className="demo-link">Watch the Preview</button>
              </div>
            </motion.div>
          </div>

          {/* Right: Sliding Mockup */}
          <div className="promo-visual-side">
            <div className="mockup-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={promoIndex}
                  className="image-wrapper"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <img src={promoImages[promoIndex]} alt="App Interface" />
                </motion.div>
              </AnimatePresence>
              {/* Decorative shadow base */}
              <div className="mockup-shadow"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Promo;