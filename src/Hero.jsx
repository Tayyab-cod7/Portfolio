import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Animated blob SVG
const Blob = () => (
  <motion.svg
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, duration: 0.8, type: "spring" }}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full absolute inset-0 z-0"
    aria-hidden="true"
  >
    <motion.path
      d="M320,220Q320,300,220,320Q120,340,80,240Q40,140,140,80Q240,20,300,120Q360,220,320,220Z"
      fill="url(#blob-gradient)"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay: 1 }}
    />
    <defs>
      <linearGradient id="blob-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#a5b4fc" />
      </linearGradient>
    </defs>
  </motion.svg>
);

const socials = [
  { icon: <FaGithub />, url: "https://github.com/Tayyab-cod7", label: "GitHub" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muhammad-tayyab-611907376", label: "LinkedIn" },
  { icon: <FaEnvelope />, url: "mailto:stackcraft.com@gmail.com", label: "Email" },
];

const typewriterWords = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

export default function Hero() {
  const [wordIdx, setWordIdx] = React.useState(0);
  const [displayed, setDisplayed] = React.useState("");
  const [typing, setTyping] = React.useState(true);

  // Typewriter effect
  React.useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < typewriterWords[wordIdx].length) {
        timeout = setTimeout(() => {
          setDisplayed(typewriterWords[wordIdx].slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setTyping(true);
        setWordIdx((wordIdx + 1) % typewriterWords.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, wordIdx]);

  return (
    <section
      id="home"
      aria-label="Hero section introducing M.Tayyab"
      className="relative min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 pt-8 md:pt-4 gap-10 md:gap-0 bg-gradient-to-br from-white via-gray-100 to-blue-100 dark:from-[#0f0f0f] dark:via-[#121212] dark:to-[#1a1a1a] transition-colors duration-500 overflow-x-hidden"
    >
      {/* Left: Text */}
      <div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3 sm:gap-4 w-full md:w-auto">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
        >
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">M.Tayyab</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-8 sm:h-10 md:h-12 flex items-center"
        >
          <span className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-400 mt-2 font-semibold">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mt-2 sm:mt-4"
        >
          I build modern, responsive, and user-friendly web experiences.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            type: "spring",
            bounce: 0.3,
          }}
          className="flex mt-6 sm:mt-8 w-full sm:w-auto justify-center md:justify-start"
        >
          <a
            href="#contact"
            className="rounded-full bg-white text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg shadow-lg transition-all duration-300 text-center focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 hover:bg-blue-600 hover:text-white"
            aria-label="Contact Me"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex gap-6 mt-6 text-2xl text-gray-500 dark:text-gray-400"
        >
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Right: Centered Image inside Blob */}
    {/* Right: Centered Image inside Blob */}
<div className="relative flex-1 flex justify-center items-center z-0 w-full md:w-auto mb-8 md:mb-0">
  <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px]">
    <Blob />
    <motion.img
      src="/Me.png"
      alt="M.Tayyab profile"
      initial={{ y: -700, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 2.2, type: "spring", bounce: 0.08 }}
      className="absolute inset-0 m-auto w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover z-10"
    />
  </div>
</div>

    </section>
  );
}
