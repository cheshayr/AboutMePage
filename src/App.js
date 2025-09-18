import React, { useState, useEffect } from "react";
import {
  FaTools,
  FaBolt,
  FaDollarSign,
  FaCogs,
  FaCalendarAlt,
  FaBell,
  FaWrench,
  FaCreditCard,
  FaQuoteLeft,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./App.css";

import tierodLogo from "./tierod-logo.png";
import tierodShop from "./tierod-shop.png";

// Local promo images
import app1 from "./assets/AutomateLogo.png";
import app2 from "./assets/AutomateLogo.png";
import app3 from "./assets/AutomateLogo.png";

// Services
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

// Promo images (local app mockups)
const promoImages = [app1, app2, app3];

function App() {
  const [current, setCurrent] = useState(0);
  const [visibleSections, setVisibleSections] = useState([]);
  const [promoIndex, setPromoIndex] = useState(0);

  const nextSlide = () => {
    setCurrent(current === services.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? services.length - 1 : current - 1);
  };

  // Auto-slide for promo section
  useEffect(() => {
    const interval = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promoImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide for services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
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
      <section
  className="hero"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(11,27,58,0.4), rgba(11,27,58,0.85)), url(${tierodShop})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#f1c40f",
  }}
>
  <div className="hero-text fade-in" style={{ maxWidth: "900px", padding: "2rem" }}>
    <h1 style={{ fontSize: "3.2rem", fontWeight: "700", textShadow: "2px 2px 10px rgba(0,0,0,0.6)" }}>
      Welcome to Tierodman Auto Center
    </h1>
    <p style={{ marginTop: "1rem", fontSize: "1.25rem", color: "#f9e79f", textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}>
      Your trusted partner for automotive repair, maintenance, and quality parts. 
      We bring speed, expertise, and affordability to every car service.
    </p>
    <p
      className="quote"
      style={{
        marginTop: "1.5rem",
        fontStyle: "italic",
        fontWeight: "600",
        fontSize: "1.3rem",
        color: "#fff",
        textShadow: "1px 1px 8px rgba(0,0,0,0.7)",
      }}
    >
      “Superior quality service at an affordable price.”
    </p>
  </div>
</section>


      {/* About Section */}
      <section
        className={`about reveal ${
          visibleSections.includes("about") ? "active" : ""
        }`}
        id="about"
      >
        <h2>About Us</h2>
        <p>
          At Tierodman Auto Center, we pride ourselves on delivering expert
          automotive repair and maintenance. With years of experience and a
          dedicated team of mechanics, we ensure your vehicle gets the best
          treatment possible.
        </p>
      </section>

      {/* Services Section */}
      <section
        className={`services reveal ${
          visibleSections.includes("services") ? "active" : ""
        }`}
        id="services"
      >
        <h2>Our Services</h2>
        <div className="slider">
          <button onClick={prevSlide} className="arrow left">
            ❮
          </button>
          <div className="slide fade-slide service-card">
            <img src={services[current].img} alt={services[current].title} />
            <h3>{services[current].title}</h3>
          </div>
          <button onClick={nextSlide} className="arrow right">
            ❯
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className={`why reveal ${
          visibleSections.includes("why") ? "active" : ""
        }`}
        id="why"
      >
        <h2>Why Choose Tierodman?</h2>
        <div className="why-cards">
          <div className="card">
            <FaTools className="icon" /> Trusted Mechanics
          </div>
          <div className="card">
            <FaBolt className="icon" /> Fast & Reliable Service
          </div>
          <div className="card">
            <FaDollarSign className="icon" /> Affordable Pricing
          </div>
          <div className="card">
            <FaCogs className="icon" /> Quality Parts
          </div>
        </div>
      </section>

      {/* App Features */}
      <section
        className={`features reveal ${
          visibleSections.includes("features") ? "active" : ""
        }`}
        id="features"
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
      </section>

      {/* Promo Section */}
      <section
        className={`promo reveal ${
          visibleSections.includes("promo") ? "active" : ""
        }`}
        id="promo"
      >
        <div className="promo-content">
          <div className="promo-img slide-up">
            <img
              key={promoIndex}
              src={promoImages[promoIndex]}
              alt={`App Mockup ${promoIndex + 1}`}
              className="fade-slide"
            />
          </div>
          <div className="promo-text">
            <h2>Download Our App</h2>
            <p>
              Book services, track repairs, and manage your appointments right
              from your phone. Experience convenience with Tierodman Auto Center.
            </p>
            <button className="download-btn bounce">Download Now</button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        className={`testimonials reveal ${
          visibleSections.includes("reviews") ? "active" : ""
        }`}
        id="reviews"
      >
        <h2>Customer Reviews</h2>
        <div className="testimonial-cards">
          <div className="card">
            <FaQuoteLeft className="quote-icon" />
            “Fast and reliable! My car feels brand new.”
          </div>
          <div className="card">
            <FaQuoteLeft className="quote-icon" />
            “Affordable prices and great service!”
          </div>
          <div className="card">
            <FaQuoteLeft className="quote-icon" />
            “Booking with the app is so convenient.”
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>
          © {new Date().getFullYear()} Tierodman Auto Center | All Rights
          Reserved
        </p>
        <div className="social-links">
          {/* FB moved to floating button */}

        </div>
      </footer>

      {/* Floating Facebook Button */}
      <a
        href="https://facebook.com"
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
