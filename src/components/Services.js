import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/styles/services.css";

const allServices = [
  { 
    id: "01", 
    title: "Auto Electrical", 
    desc: "Expert troubleshooting for wiring, lighting, and electronic modules.", 
    longDesc: "We diagnose and repair automotive electrical systems including lights, wiring, and charging components using advanced testing equipment.",
    inclusions: ["Wiring Repair", "Alternator Testing", "Lighting Systems", "Fuse Box Service"],
    img: "/services/AutoElectrical.jpg"
  },
  { 
    id: "02", 
    title: "Battery and Accessories", 
    desc: "Reliable power solutions and premium electronic installations.", 
    longDesc: "Battery and accessories services ensure your vehicle’s electrical systems are supported by a reliable power source. From battery replacement to checking charging systems, we keep you powered up.",
    inclusions: ["Battery Replacement", "Terminal Cleaning", "Voltage Testing", "Accessory Fitting"],
    img: "/services/BatteryAccessories.jpg"
  },
  { 
    id: "03", 
    title: "Bodylift / Body Lowered", 
    desc: "Professional suspension modifications for stance and clearance.", 
    longDesc: "Enhance your vehicle's appearance or off-road clearance with professional body lift or lowering services tailored specifically to your vehicle's geometry.",
    inclusions: ["Lift Kit Install", "Lowering Springs", "Shock Upgrades", "Stance Calibration"],
    img: "/services/BodyLift.jpg"
  },
  { 
    id: "04", 
    title: "Brake Disc / Drum Refacing", 
    desc: "Precision machining to eliminate vibration and squeaking.", 
    longDesc: "Restore optimal braking performance with our brake disc and drum refacing service. We smooth out surfaces to ensure safe and quiet stops.",
    inclusions: ["Disc Resurfacing", "Drum Machining", "Brake Cleaning", "Thickness Inspection"],
    img: "/services/BrakeDisk.jpg"
  }, 
  { 
    id: "05", 
    title: "Brakes Overhaul", 
    desc: "Comprehensive safety restoration of your entire braking system.", 
    longDesc: "Ensure total stopping power with our brakes overhaul service. We provide a full teardown inspection and replacement of all critical worn-out components.",
    inclusions: ["Master Cylinder Check", "Caliper Rebuild", "Brake Line Flush", "Pad/Shoe Swap"],
    img: "/services/BreakOverhaul.jpg"
  },
  { 
    id: "06", 
    title: "Camber Correction", 
    desc: "Alignment adjustments to prevent uneven tire wear and pulling.", 
    longDesc: "Improve tire longevity and vehicle handling with our camber correction service. We provide precision alignment for maximum road contact.",
    inclusions: ["Camber Kit Install", "Angle Adjustment", "Handling Optimization", "Tire Wear Analysis"],
    img: "/services/CamberCorrection.jpg"
  },
  { 
    id: "07", 
    title: "Change Oil / Tune Up", 
    desc: "Essential engine maintenance for peak performance and longevity.", 
    longDesc: "Keep your vehicle in top shape with our Change Oil and Tune-Up service. We ensure your engine stays clean, lubricated, and firing efficiently.",
    inclusions: ["Synthetic Oil Change", "Filter Replacement", "Spark Plug Check", "Air Filter Cleaning"],
    img: "/services/ChangeOil.jpg"
  },
  { 
    id: "08", 
    title: "Check Engine Scanning", 
    desc: "Advanced OBD-II diagnostics to clear codes and find faults.", 
    longDesc: "A professional scan identifies engine issues quickly using state-of-the-art diagnostic tools to pinpoint sensor failures or mechanical faults.",
    inclusions: ["Error Code Reading", "Data Log Analysis", "Sensor Testing", "System Reset"],
    img: "/services/CheckEngine.jpg"
  },
  { 
    id: "09", 
    title: "Computerized 4W Alignment", 
    desc: "High-precision four-wheel alignment for perfect tracking.", 
    longDesc: "This service uses computerized laser technology to ensure all four wheels are perfectly parallel, improving fuel economy and steering control.",
    inclusions: ["Laser Measurement", "Toe/Caster Adjust", "Steering Centering", "Suspension Check"],
    img: "/services/4wAlignment.jpg"
  },
  { 
    id: "10", 
    title: "Goodyear Tires", 
    desc: "Premium tire supply, installation, and road safety checks.", 
    longDesc: "As an authorized provider, we offer genuine Goodyear tires suited for your driving needs, ensuring maximum grip and durability on any road surface.",
    inclusions: ["Tire Fitting", "Valve Replacement", "Pressure Calibration", "Tread Inspection"],
    img: "/services/GoodYearTires.jpg"
  },
  { 
    id: "11", 
    title: "Kalampag Problem", 
    desc: "Specialized noise diagnostics for underchassis rattles.", 
    longDesc: "This service identifies and resolves those annoying squeaks, clunks, or rattles coming from under your car, ensuring a quiet and firm ride.",
    inclusions: ["Bushing Inspection", "Ball Joint Check", "Linkage Tightening", "Road Test"],
    img: "/services/Kalampag.jpg"
  },
  { 
    id: "12", 
    title: "Power Steering Overhaul", 
    desc: "Leak repairs and fluid restoration for effortless steering.", 
    longDesc: "Regain smooth and easy steering control. We fix leaks, replace worn seals, and rebuild steering pumps to improve overall handling.",
    inclusions: ["Pump Rebuild", "Seal Replacement", "Rack & Pinion Check", "Fluid Flush"],
    img: "/services/PowerSteer.jpg"
  },
  { 
    id: "13", 
    title: "Underchassis / Suspension Repair", 
    desc: "Structural and suspension care for a stable, safe drive.", 
    longDesc: "Get a smooth and stable ride with our complete underchassis service. We ensure your shocks, struts, and chassis components are secure.",
    inclusions: ["Shock Replacement", "Strut Mounting", "Control Arm Repair", "Chassis Greasing"],
    img: "/services/Underchasis.jpg"
  },
  { 
    id: "14", 
    title: "Wheel Balancing", 
    desc: "Eliminate steering wheel vibration at high speeds.", 
    longDesc: "Wheel balancing ensures the weight of the tire and rim is perfectly distributed. This prevents vibrations and protects your suspension components.",
    inclusions: ["Dynamic Balancing", "Weight Calibration", "Rim Inspection", "High-Speed Testing"],
    img: "/services/AutoElectrical.jpg"
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
          <h2 className="services-title">Services Offered</h2>
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