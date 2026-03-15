import React from "react";
import "../assets/styles/about.css";
import img1 from "../assets/advertisement/ad4.png"; 

const About = () => {
  return (
    <section className="about" id="about">
      
      {/* SECTION 1: THE STORY */}
      <div className="about-beat">
        <div className="container-main">
          <div className="beat-grid-a">
            <div className="beat-content">
              <span className="label-gold">Our Origin</span>
              <h2>Built from the <br/> ground up.</h2>
              <p>
                Founded in 2026, <strong>Tierodman</strong> emerged from a desire to provide 
                Quezon City with automotive care that doesn't compromise on honesty. 
                What started in a single bay has grown into a standard for technical skill.
              </p>
            </div>
            <div className="beat-visual">
              <img src={img1} alt="Workshop" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: THE PHILOSOPHY (Text Only) */}
      <div className="about-beat">
        <div className="container-center">
          <span className="label-gold">Philosophy</span>
          <h2 className="display-text">
            We treat your car as a piece of engineering, not just a machine.
          </h2>
          <div className="dual-p">
            <p>Our workshop is a sanctuary for performance. We utilize advanced diagnostics to ensure every repair is accurate, permanent, and safe.</p>
            <p>We avoid the "quick fix" culture. Instead, we focus on the root cause, extending the life of your vehicle for years to come.</p>
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;