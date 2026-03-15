import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/styles/services.css";

const allServices = [
  { 
    id: "01", 
    title: "General Auto Repair", 
    desc: "Complete mechanical care from suspension to exhaust systems.", 
    longDesc: "Our general repair service covers the mechanical heartbeat of your vehicle. We use dealer-grade tools to ensure every component meets factory specifications.",
    inclusions: ["Suspension Tuning", "Exhaust System Repair", "Brake Line Service", "Fluid Leak Detection"],
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70" 
  },
  { 
    id: "02", 
    title: "Parts & Accessories", 
    desc: "Genuine OEM parts and premium accessories for all makes.", 
    longDesc: "We source only genuine Original Equipment Manufacturer (OEM) parts to guarantee longevity and performance.",
    inclusions: ["OEM Replacement Parts", "Performance Upgrades", "Exterior Accessories"],
    img: "https://images.unsplash.com/photo-1571607388263-df6b4f3afaae" 
  },
  { 
    id: "03", 
    title: "Engine Diagnostics", 
    desc: "Advanced computer scanning to pinpoint performance issues.", 
    longDesc: "Using state-of-the-art diagnostic equipment, we identify hidden faults before they become major repairs.",
    inclusions: ["ECU Mapping", "Sensor Calibration", "Check Engine Diagnosis"],
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267d5" 
  },
  { 
    id: "04", 
    title: "Tire & Brake Services", 
    desc: "Safety-first approach to stopping power and road grip.", 
    longDesc: "Ensuring your vehicle stops as well as it goes. High-performance brake pads and precision tire alignment.",
    inclusions: ["Brake Pad Replacement", "Wheel Alignment", "Tire Rotation"],
    img: "https://images.unsplash.com/photo-1596995804697-8daee17dd80d" 
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % allServices.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + allServices.length) % allServices.length);

  return (
    <section className="services-section" id="services">
      <div className="services-wrapper">
        <header className="services-header">
          <span className="label-gold">Technical Expertise</span>
          <h2 className="services-title">Specialized Care.</h2>
        </header>

        <div className="main-display-area">
          {/* External Arrows - Outside the card container */}
          {!isExpanded && (
            <button onClick={prevSlide} className="nav-arrow left-arrow">←</button>
          )}

          <motion.div layout className={isExpanded ? "services-grid" : "services-focus-view"}>
            <AnimatePresence mode="wait">
              {isExpanded ? (
                allServices.map((service) => (
                  <ServiceCard key={service.id} service={service} onClick={() => setSelectedService(service)} />
                ))
              ) : (
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="focus-track"
                >
                  <ServiceCard 
                    service={allServices[currentIndex]} 
                    onClick={() => setSelectedService(allServices[currentIndex])} 
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {!isExpanded && (
            <button onClick={nextSlide} className="nav-arrow right-arrow">→</button>
          )}
        </div>

        <div className="services-footer">
          <button className="expand-button" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Back to Featured" : "Explore All Services"}
          </button>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="modal-overlay">
            <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedService(null)} />
            <motion.div className="service-modal" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}>
              <button className="modal-close" onClick={() => setSelectedService(null)}>✕</button>
              <div className="modal-grid">
                <div className="modal-visual"><img src={selectedService.img} alt={selectedService.title} /></div>
                <div className="modal-info">
                  <span className="label-gold">Service {selectedService.id}</span>
                  <h2 className="modal-title">{selectedService.title}</h2>
                  <p className="modal-long-desc">{selectedService.longDesc}</p>
                  <div className="modal-inclusions">
                    <h4>Service Scope:</h4>
                    <ul>{selectedService.inclusions.map((item, i) => (<li key={i}>{item}</li>))}</ul>
                  </div>
                  <button className="modal-cta">Request an Appointment</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ServiceCard = ({ service, onClick }) => (
  <motion.div layout className="service-node" onClick={onClick}>
    <div className="node-image">
      <img src={service.img} alt={service.title} />
      <span className="node-id">{service.id}</span>
      <div className="node-overlay">
        <span>View Details</span>
      </div>
    </div>
    <div className="node-details">
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </div>
  </motion.div>
);

export default Services;