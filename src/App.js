import React, { useState } from "react";
import "./App.css";

import tierodLogo from "./tierod-logo.png";   
import tierodShop from "./tierod-shop.png";   
import tierodMock from "./tierod-mock.png";   

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

function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === services.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? services.length - 1 : current - 1);
  };

  return (
    <div className="App">
      {

      }
      <header className="navbar">
        <div className="logo">
          <img src={tierodLogo} alt="Tierodman Logo" />
        </div>
        <nav>
          <a href="#admin">Log In for Admin</a>
        </nav>
      </header>

      {

      }
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(11,27,58,0.6), rgba(11,27,58,0.6)), url(${tierodShop})`,
        }}
      >
        <div className="hero-text">
          <h1>Welcome to Tierodman Auto Center</h1>
          <p>
            Tierodman Auto Center is highly trusted as one of the leading
            providers of automotive repair and maintenance services. We also
            sell and install automotive parts and accessories that range from
            original, replacement, and surplus parts depending on the
            customer's preference and budget.
          </p>
          <p className="quote">
            “To provide the fastest automotive service of superior quality to
            all our customers at an affordable price.”
          </p>
        </div>
      </section>

      {

      }
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="slider">
          <button onClick={prevSlide} className="arrow left">
            ❮
          </button>
          <div className="slide">
            <img src={services[current].img} alt={services[current].title} />
            <h3>{services[current].title}</h3>
          </div>
          <button onClick={nextSlide} className="arrow right">
            ❯
          </button>
        </div>
      </section>

      {

      }
      <section className="promo">
        <div className="promo-content">
          <div className="promo-img">
            <img src={tierodMock} alt="Tierodman App Mockup" />
          </div>
          <div className="promo-text">
            <h2>Download Our App</h2>
            <p>
              Book services, track repairs, and manage your appointments right
              from your phone. Experience convenience with Tierodman Auto
              Center.
            </p>
            <button className="download-btn">Download Now</button>
          </div>
        </div>
      </section>

      {

      }
      <footer className="footer" id="contact">
        <p>
          © {new Date().getFullYear()} Tierodman Auto Center | All Rights
          Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;

