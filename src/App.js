import React, { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import separated CSS files
import "./assets/styles/global.css";
import "./assets/styles/navbar.css";
import "./assets/styles/hero.css";
import "./assets/styles/about.css";
import "./assets/styles/services.css";
import "./assets/styles/promo.css";
import "./assets/styles/footer.css";

import tierodLogo from "./tierod-logo.png";
import tierodShop from "./tierod-shop.png";

// Local promo images
import app1 from "./assets/advertisement/ad1.png";
import app2 from "./assets/advertisement/ad2.png";
import app3 from "./assets/advertisement/ad3.png";
import aboutImage from "./assets/advertisement/ad4.png"; 

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
  const [expanded, setExpanded] = useState(false); // ✅ Expand state

  // Auto-slide promo images
  useEffect(() => {
    const interval = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promoImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide services (only when not expanded)
  useEffect(() => {
    if (expanded) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [expanded]);

  return (
    <div className="App font-poppins">
      {/* Navbar */}
      <header className="navbar">
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#promo">App</a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className="hero"
        style={{ backgroundImage: `url(${tierodShop})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="hero-content">
          {/* Logo on the left */}
          <motion.img
            src={tierodLogo}
            alt="Tierodman Logo"
            className="hero-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />

          {/* Text on the right */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <h1>AutoMate</h1>
            <p>
              Your trusted partner for automotive repair, maintenance, and quality
              parts. We bring speed, expertise, and affordability to every car
              service.
            </p>
            <p className="quote">“Superior quality service at an affordable price.”</p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="about"
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={aboutImage} alt="About Tierodman Auto Center" />
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At <strong>Tierodman Auto Center</strong>, we pride ourselves on delivering
            expert automotive repair and maintenance. With years of experience and
            a dedicated team of mechanics, we ensure your vehicle gets the best
            treatment possible.
          </p>
        </div>
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
            {expanded ? (
              // ✅ Expanded view showing all services
              <motion.div
                className="expanded-services"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Close button */}
                <motion.button
                  className="close-btn"
                  onClick={() => setExpanded(false)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>

                <div className="services-grid">
                  {services.map((service) => (
                    <motion.div
                      key={service.title}
                      className="service-card expanded"
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.img
                        src={service.img}
                        alt={service.title}
                        layout="responsive"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                      <motion.h3>{service.title}</motion.h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : (
              // ✅ Single slider card
              <motion.div
                key={current}
                className="slide service-card"
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.25)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.img
                  src={services[current].img}
                  alt={services[current].title}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <motion.h3>{services[current].title}</motion.h3>

                {/* ✅ New "See All" button */}
                <motion.button
                  className="see-all-btn"
                  onClick={() => setExpanded(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See All Services
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
              Book services, track repairs, and manage your appointments right from
              your phone. Experience convenience with{" "}
              <strong>Tierodman Auto Center</strong>.
            </p>

            {/* Single Download Button */}
            <motion.button whileHover={{ scale: 1.05 }} className="download-btn">
              <i className="fab fa-google-play"></i> Download on Google Play
            </motion.button>
          </motion.div>
        </div>
      </motion.section>


     {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <h3>Tierodman Auto Center</h3>
          <p>Expert automotive repair & maintenance, trusted for years.</p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Tierodman Auto Center | All Rights Reserved
          </p>
        </div>
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
