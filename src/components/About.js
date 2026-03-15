import React from "react";
import "../assets/styles/about.css";
import img1 from "../assets/advertisement/TierodmanShop.jpg"; 
import img2 from "../assets/advertisement/AboutImage.png";
// import img2 from "../assets/advertisement/AppMockup.jpg"; <— Add your app image here

const About = () => {
  return (
    <section className="about" id="about">
      
      {/* SECTION 1: THE STORY (ORIGIN) */}
      <div className="about-beat">
        <div className="container-main">
          <div className="beat-grid-a">
            <div className="beat-content">
              <span className="label-gold">Our Origin</span>
              <h2>Built from the <br/> ground up.</h2>
              <p>
                Tierodman Auto Center, <strong>established in 1986,</strong> is a long-standing and reputable auto repair shop in Makati City. Over the decades, it has become one of the most trusted automotive centers in Metro Manila.
              </p>
            </div>
            <div className="beat-visual">
              <img src={img1} alt="Workshop" />
            </div>
          </div>
        </div>
      </div>

     {/* UPDATED SECTION 2: WHY THE APP? */}
      <div className="about-beat" style={{ backgroundColor: "#ffffff" }}> 
        <div className="container-main">
          <div className="beat-grid-b">
            <div className="beat-visual">
              <img src={img2} alt="AutoMate App" /> 
            </div>
            <div className="beat-content">
              <span className="label-gold">Modernizing Service</span>
              <h2>Why we built <br/> AutoMate.</h2>
              <p>
                Traditional car repair is often filled with uncertainty. We built the <strong>AutoMate app</strong> to bridge the gap between our decades of mechanical expertise and the need for modern transparency. 
              </p>
              <div className="pill-list">
                <span>Real-time Tracking</span>
                <span>Digital Records</span>
                <span>Instant Booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: THE PHILOSOPHY */}
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