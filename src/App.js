import React from "react";
import { FaFacebookF } from "react-icons/fa";

// 1. IMPORT CHAKRA PROVIDER AND DEFAULT SYSTEM
// This fixes the "Cannot read properties of undefined (reading '_config')" error
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"; 

// ✅ 1. Import your organized components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs"; 
import About from "./components/About";
import Services from "./components/Services";
import Promo from "./components/Promo";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer";
import FAQs from "./components/FAQss"; 

// ✅ 2. Import the Global CSS
import "./assets/styles/global.css";

function App() {
  return (
    // 2. PASS THE DEFAULT SYSTEM TO THE PROVIDER
    <ChakraProvider value={defaultSystem}>
      <div className="App font-poppins">
        {/* 🚀 Sticky Navigation */}
        <Navbar />

        {/* 🏎️ Main Page Content */}
        <main>
          {/* The "Hook" */}
          <Hero />

          {/* The "Story" */}
          <About />

          {/* The "Action" */}
          <Services />

          {/* The "Mobile Connection" */}
          <Promo />
          
          {/* The "Value" (Currently commented out) */}
          {/* <WhyChooseUs /> */}

          {/* The "Conversion" */}
          <Contact />

          {/* The "Questions" */}
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
    </ChakraProvider>
  );
}

export default App;