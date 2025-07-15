import React from "react";
import './App.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

// SVG Divider Component
const WavyDivider = ({ flip }) => (
  <svg
    viewBox="0 0 1440 100"
    className={`w-full h-16 md:h-24 ${flip ? 'rotate-180' : ''}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ display: 'block' }}
  >
    <path
      d="M0,40 C360,120 1080,-40 1440,40 L1440,100 L0,100 Z"
      fill="currentColor"
      className="text-blue-100 dark:text-[#232946] transition-colors duration-500"
    />
  </svg>
);

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <WavyDivider />
      <About />
      <WavyDivider flip />
      <Skills />
      <WavyDivider />
      <Projects />
      <WavyDivider flip />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
