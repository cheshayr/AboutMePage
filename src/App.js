import React from "react";
import { FaFacebookF } from "react-icons/fa";

// ✅ 1. Import your organized components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs"; // New
import About from "./components/About";
import Services from "./components/Services";
import Promo from "./components/Promo";
import Contact from "./components/Contact"; // New
import Footer from "./components/Footer";
import FAQs from "./components/FAQss";


// ✅ 2. Import the Global CSS
import "./assets/styles/global.css";

function App() {
  return (
    <div className="App font-poppins">
      {/* 🚀 Sticky Navigation */}
      <Navbar />

      {/* 🏎️ Main Page Content */}
      <main>
        {/* The "Hook" - First thing they see */}
        <Hero />

        {/* The "Story" - Who you are */}
        <About />

        {/* The "Action" - What you can do for their car */}
        <Services />

        {/* The "Mobile Connection" - Your app */}
        <Promo />
        
        {/* The "Value" - Why they should trust you */}
        {/* <WhyChooseUs /> */}

        {/* The "Conversion" - How they find you */}
        <Contact />

        <FAQs />

        

      </main>

      {/* 🛠️ Footer */}
      <Footer />

      {/* 📱 Global Floating Elements */}
      <a
        href="https://www.facebook.com/tierodmanautocenter"
        target="_blank"
        rel="noreferrer"
        className="floating-fb"
        title="Chat with us on Facebook"
      >
        <FaFacebookF />
      </a>
    </div>
  );
}

export default App;