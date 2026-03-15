import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import "../assets/styles/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        
        {/* Left Side: Information */}
        <div className="contact-info">
          <span className="sub-heading">Get in Touch</span>
          <h2>Visit Our Shop</h2>
          <p className="contact-description">
            Experience expert automotive care at our Quezon City facility. 
            Walk-ins are welcome, but appointments are preferred.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>123 Tierododman St, Quezon City, Metro Manila</p>
              </div>
            </div>

            <div className="detail-item">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+639123456789">0912 345 6789</a></p>
              </div>
            </div>

            <div className="detail-item">
              <FaClock className="contact-icon" />
              <div>
                <h4>Business Hours</h4>
                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <button className="booking-btn">Book an Appointment</button>
        </div>

        {/* Right Side: Map */}
        <div className="map-wrapper">
          <iframe 
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15440.0!2d121.0!3d14.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzAwLjAiTiAxMjHCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy">
          </iframe>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;