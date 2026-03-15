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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="promo" id="promo">
      <div className="promo-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={promoIndex}
            className="promo-img"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <img src={promoImages[promoIndex]} alt="App" />
          </motion.div>
        </AnimatePresence>
        <div className="promo-text">
          <h2>Download Our App</h2>
          <button className="download-btn">Google Play</button>
        </div>
      </div>
    </section>
  );
};

export default Promo;