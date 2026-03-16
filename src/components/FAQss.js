import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/styles/faq.css";

const faqData = [
  { 
    question: "How long does a standard check-up take?", 
    answer: "A standard diagnostic check-up usually takes between 45 to 90 minutes depending on the vehicle's condition." 
  },
  { 
    question: "Do I need to book an appointment?", 
    answer: "While we accept walk-ins, we highly recommend booking through the AutoMate app to ensure a priority bay is ready for you." 
  },
  { 
    question: "Are your spare parts genuine?", 
    answer: "Absolutely. We only use OEM (Original Equipment Manufacturer) or certified high-performance aftermarket parts." 
  },
  { 
    question: "Can I track my repair status?", 
    answer: "Yes! By using the AutoMate app, you'll receive live notifications and photos of your vehicle's progress." 
  }
];

const FAQs= () => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="faq-section" id="faq">
      <div className="container-faq">
        
        {/* FAQ Header */}
        <div className="faq-header">
          <span className="label-gold">Support</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        {/* Accordion List */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIdx === index ? "active" : ""}`} 
              onClick={() => setActiveIdx(activeIdx === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-icon">{activeIdx === index ? "−" : "+"}</span>
              </div>
              
              <AnimatePresence>
                {activeIdx === index && (
                  <motion.div 
                    className="faq-answer" 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Minimalist Contact Form */}
        <div className="contact-form-container">
          <div className="form-title">
            <h3>Direct Inquiry</h3>
            <p>Type your concerns below and our team will get back to you shortly.</p>
          </div>
          
          <form 
            className="minimal-form" 
            action="https://formspree.io/f/your-id" 
            method="POST"
          >
            <div className="form-group-row">
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="_replyto" placeholder="Email Address" required />
            </div>

            <select name="concern-type" required defaultValue="">
              <option value="" disabled>Select Type of Concern</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Repair Status">Repair Status</option>
              <option value="Technical Issue">Technical Issue</option>
              <option value="Feedback">Feedback</option>
            </select>

            <textarea 
              name="message" 
              placeholder="Describe your concern here..." 
              rows="5" 
              required
            ></textarea>

            {/* Honeypot to prevent spam */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default FAQs;