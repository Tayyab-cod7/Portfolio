import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, url: "https://github.com/Tayyab-cod7", label: "GitHub" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muhammad-tayyab-611907376", label: "LinkedIn" },
  { icon: <FaEnvelope />, url: "mailto:stackcraft.com@gmail.com", label: "Email" },
];

export default function Footer() {
  React.useEffect(() => {
    const onScroll = () => {
      // This function is no longer used to set showTop,
      // but it's kept as it was in the original file.
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animation variants for staggered entrance
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.15 } })
  };

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full bg-gradient-to-tr from-gray-100 via-white to-gray-200 dark:from-[#0d0d0d] dark:via-[#1a1a1a] dark:to-[#0d0d0d] px-6 py-10 mt-12 relative"
    >
      {/* Top border accent */}
      <div className="border-t-2 border-blue-500 w-1/6 mx-auto mb-6" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Left: Brand */}
        <motion.div
          custom={0}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center md:items-start"
        >
          <motion.span
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-gray-300 transition-all duration-300 ease-in-out cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 hover:rotate-1"
          >
            StackCraft Portfolio
          </motion.span>
          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">Designed & Built by StackCraft Portfolio</span>
        </motion.div>
        {/* Center: Empty for spacing on md+ */}
        <div className="hidden md:block" />
        {/* Right: Socials */}
        <motion.div
          custom={1}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center md:justify-end gap-8"
        >
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 ease-in-out"
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-4" />
      {/* Copyright */}
      <div className="flex flex-col items-center justify-center mt-2">
        <span className="text-sm text-gray-500 dark:text-gray-400 text-center">© 2025 StackCraft Portfolio. All rights reserved.</span>
      </div>
    </motion.footer>
  );
} 