import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const observer = useRef(null);

  // ScrollSpy using IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Scroll progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.to));
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new window.IntersectionObserver(
      entries => {
        // Find the entry with the largest intersection ratio
        let maxRatio = 0;
        let currentId = active;
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            currentId = entry.target.id;
          }
        });
        setActive(currentId);
      },
      { threshold: [0.3, 0.5, 0.7] }
    );
    sections.forEach(section => {
      if (section) observer.current.observe(section);
    });
    return () => observer.current.disconnect();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  // Navbar background classes
  const navBg = scrolled
    ? "bg-white shadow-md dark:bg-[#121212]"
    : "bg-white/50 dark:bg-black/50 backdrop-blur";

  // Link classes
  const linkBase =
    "font-medium uppercase tracking-wide px-3 py-2 transition-all duration-300 ease-in-out cursor-pointer ";
  const linkColor =
    "text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 hover:border-b-2 hover:border-blue-500";
  const activeLink =
    "text-blue-700 dark:text-blue-300 font-semibold border-b-2 border-current";

  // Helper for smooth scroll
  const handleNavClick = (e, to) => {
    e.preventDefault();
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`sticky w-full z-50 top-0 ${navBg} backdrop-blur supports-backdrop-blur:bg-white/50 transition-colors`}
        style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          {/* Logo with animation on hover */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-bold text-2xl cursor-pointer text-gray-900 dark:text-white select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            StackCraft Portfolio
          </motion.div>
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map(link => (
              <a
                key={link.to}
                href={`#${link.to}`}
                className={`${linkBase} ${linkColor} ${active === link.to ? activeLink : ""}`}
                onClick={e => handleNavClick(e, link.to)}
              >
                {link.name}
              </a>
            ))}
            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(d => !d)}
              className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
          {/* Hamburger */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none z-50"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Open menu"
          >
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-0 w-screen h-screen bg-white dark:bg-[#121212] flex flex-col items-center pt-32 gap-8 z-[9999] md:hidden"
              >
                {/* Close (cross) button */}
                <button
                  className="absolute top-6 right-6 text-3xl text-gray-700 dark:text-gray-200 focus:outline-none"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
                {navLinks.map(link => (
                  <a
                    key={link.to}
                    href={`#${link.to}`}
                    className={`${linkBase} text-2xl ${linkColor} ${active === link.to ? activeLink : ""}`}
                    onClick={e => handleNavClick(e, link.to)}
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => setDark(d => !d)}
                  className="mt-8 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {dark ? <FaSun size={24} /> : <FaMoon size={24} />}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Scroll Progress Bar */}
        <div className="h-1 w-full bg-transparent">
          <motion.div
            className="h-1 bg-blue-600 dark:bg-blue-400 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress / 100 }}
            style={{ scaleX: scrollProgress / 100 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />
        </div>
      </motion.nav>
    </>
  );
} 