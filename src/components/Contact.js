import React from "react";
import "../assets/styles/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Visit Our Shop</h2>
          <p>📍 <strong>Location:</strong> 123 Tierod St, Quezon City, Metro Manila</p>
          <p>📞 <strong>Phone:</strong> <a href="tel:+639123456789">0912 345 6789</a></p>
          <p>⏰ <strong>Hours:</strong> Mon - Sat: 8:00 AM - 5:00 PM</p>
          <button className="booking-btn">Book an Appointment</button>
        </div>
        <div className="map">
          {/* Replace this URL with your actual Google Maps embed link */}
          <iframe 
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.123456789!2d121.0!3d14.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM2JzAwLjAiTiAxMjHCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1620000000000" 
            width="100%" height="300" style={{ border: 0, borderRadius: "15px" }} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;