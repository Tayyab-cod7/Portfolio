import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const highlights = [
  { icon: "🚀", text: "1+ years of experience" },
  { icon: "🌐", text: "Built 10+ websites" },
  { icon: "💡", text: "Passionate about Coding/Designing" },
];

const sectionGradient = "bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-[#181c2a] dark:via-[#232946] dark:to-[#1a1a2e]";

export default function About() {
  const [isBouncing, setIsBouncing] = useState(false);

  // For resume button bounce
  const handleResumeClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 400);
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className={`relative overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16 px-6 md:px-12 ${sectionGradient}`}
      aria-label="About Me section"
    >
      {/* Animated Gradient Background (subtle) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 60% 40%, #60a5fa33 0%, transparent 70%)"
        }}
      />
      {/* Profile Image with Glassmorphism/Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex justify-center md:justify-end relative z-10"
      >
        {/* Glass/Glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.2, type: "spring" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 rounded-full bg-white/30 dark:bg-blue-900/30 backdrop-blur-lg shadow-2xl blur-0"
          style={{ filter: "blur(8px)" }}
        />
        <motion.img
          src="/Me.jpg"
          alt="Profile portrait"
          className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-gray-300 dark:border-gray-700 mx-auto md:mx-0 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.div>
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col items-center md:items-start text-center md:text-left relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">About Me</h2>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
          I’m a Full Stack Developer with a passion for creating clean, modern UI experiences. I love building interactive, user-friendly web apps and am always exploring new technologies. Currently, I’m focused on making people's life easier and more efficient by building web apps.
        </p>
        {/* Highlights with staggered animation */}
        <motion.ul
          className="flex flex-wrap gap-3 mt-4 mb-2 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
        >
          {highlights.map((item, idx) => (
            <motion.li
              key={idx}
              className="bg-white/70 dark:bg-gray-800/70 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 shadow flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span>{item.icon}</span> {item.text}
            </motion.li>
          ))}
        </motion.ul>
        {/* Animated Quote */}
        <motion.blockquote
          className="italic text-blue-600 dark:text-blue-400 mt-2 mb-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          “Simplicity is the soul of efficiency.”
        </motion.blockquote>
        {/* Resume Button with Icon and Bounce */}
        <div className="relative group mt-2">
          <motion.a
            href="/Resume.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-md transition font-semibold flex items-center gap-2 text-lg ${isBouncing ? 'animate-bounce' : ''}`}
            aria-label="See My Resume"
            tabIndex={0}
            onClick={handleResumeClick}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="text-xl" />
            See My Resume
          </motion.a>
          <span className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 bg-gray-800 text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-20">
            Download my resume (PDF)
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
} 