import React, { useState, useEffect } from "react";
import {
  FaTools,
  FaBolt,
  FaDollarSign,
  FaCogs,
  FaCalendarAlt,
  FaBell,
  FaWrench,
  FaQuoteLeft,
  FaFacebookF,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import separated CSS files
import "./assets/styles/global.css";
import "./assets/styles/navbar.css";
import "./assets/styles/hero.css";
import "./assets/styles/about.css";
import "./assets/styles/services.css";
import "./assets/styles/why.css";
import "./assets/styles/features.css";
import "./assets/styles/promo.css";
import "./assets/styles/testimonials.css";
import "./assets/styles/footer.css";

import tierodLogo from "./tierod-logo.png";
import tierodShop from "./tierod-shop.png";

// Local promo images
import app1 from "./assets/advertisement/ad1.png";
import app2 from "./assets/advertisement/ad2.png";
import app3 from "./assets/advertisement/ad3.png";

const services = [
  {
    title: "General Auto Repair",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    title: "Parts & Accessories",
    img: "https://images.unsplash.com/photo-1571607388263-df6b4f3afaae",
  },
  {
    title: "Engine Diagnostics",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267d5",
  },
  {
    title: "Tire & Brake Services",
    img: "https://images.unsplash.com/photo-1596995804697-8daee17dd80d",
  },
];

const promoImages = [app1, app2, app3];

function App() {
  const [current, setCurrent] = useState(0);
  const [promoIndex, setPromoIndex] = useState(0);

  // Auto-slide promo images
  useEffect(() => {
    const interval = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promoImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App font-poppins">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img src={tierodLogo} alt="Tierodman Logo" className="logo-img" />
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#promo">App</a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(11,27,58,0.4), rgba(11,27,58,0.85)), url(${tierodShop})`,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hero-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1>Welcome to Tierodman Auto Center</h1>
          <p>
            Your trusted partner for automotive repair, maintenance, and quality
            parts. We bring speed, expertise, and affordability to every car
            service.
          </p>
          <p className="quote">
            “Superior quality service at an affordable price.”
          </p>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="about"
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>About Us</h2>
        <p>
          At Tierodman Auto Center, we pride ourselves on delivering expert
          automotive repair and maintenance. With years of experience and a
          dedicated team of mechanics, we ensure your vehicle gets the best
          treatment possible.
        </p>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="services"
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Our Services</h2>
        <div className="slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="slide service-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={services[current].img}
                alt={services[current].title}
              />
              <h3>{services[current].title}</h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="why"
        id="why"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose Tierodman?</h2>
        <div className="why-cards">
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaTools className="icon" /> Trusted Mechanics
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaBolt className="icon" /> Fast & Reliable Service
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaDollarSign className="icon" /> Affordable Pricing
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaCogs className="icon" /> Quality Parts
          </motion.div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="features"
        id="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>App Features</h2>
        <ul className="feature-list">
          <li>
            <FaCalendarAlt className="icon" /> Easy service booking
          </li>
          <li>
            <FaBell className="icon" /> Appointment reminders
          </li>
          <li>
            <FaWrench className="icon" /> Track repair progress
          </li>
        </ul>
      </motion.section>

      {/* Promo Section */}
      <motion.section
        className="promo"
        id="promo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
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
              <img
                src={promoImages[promoIndex]}
                alt={`App Mockup ${promoIndex + 1}`}
              />
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="promo-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Download Our App</h2>
            <p>
              Book services, track repairs, and manage your appointments right
              from your phone. Experience convenience with Tierodman Auto
              Center.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="download-btn"
            >
              Download Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Reviews */}
      <motion.section
        className="testimonials"
        id="reviews"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Customer Reviews</h2>
        <div className="testimonial-cards">
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaQuoteLeft className="quote-icon" />
            “Fast and reliable! My car feels brand new.”
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaQuoteLeft className="quote-icon" />
            “Affordable prices and great service!”
          </motion.div>
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <FaQuoteLeft className="quote-icon" />
            “Booking with the app is so convenient.”
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>
          © {new Date().getFullYear()} Tierodman Auto Center | All Rights
          Reserved
        </p>
      </footer>

      {/* Floating FB */}
      <a
        href="https://www.facebook.com/tierodmanautocenter"
        target="_blank"
        rel="noreferrer"
        className="floating-fb"
      >
        <FaFacebookF />
      </a>
    </div>
  );
}

export default App;
