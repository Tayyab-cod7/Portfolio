import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tech: ["React", "Tailwind", "Framer Motion"],
    desc: "A modern, animated portfolio website to showcase my work and skills.",
    github: "https://github.com/Tayyab-cod7/Portfolio.git",
    demo: "https://tayyabs-portfolios.netlify.app",
    showGithub: true
  },
  {
    title: "E-commerce App",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    tech: ["React", "Redux", "Node.js"],
    desc: "A full-featured e-commerce application with cart, checkout, and admin dashboard.",
    github: "https://github.com/",
    demo: "https://ecommerce-demo.com",
    showGithub: false
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.12 * i, ease: "easeOut" },
  }),
};

const badgeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.2 + i * 0.08 },
  }),
};

export default function Projects() {
  const [modal, setModal] = useState(null);

  // ✅ Hooks called directly, not inside any loop or callback
  const anim1 = useAnimation();
  const anim2 = useAnimation();
  const animations = [anim1, anim2];

  const handleMouseMove = (e, controls) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;
    controls.start({ rotateX, rotateY });
  };

  const handleMouseLeave = (controls) => {
    controls.start({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[80vh] py-16 px-6 md:px-12 bg-white dark:bg-[#1f1f1f] overflow-hidden"
      aria-label="Projects section"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #60a5fa33 0%, transparent 70%)",
        }}
      />

      {modal && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setModal(null)}
        >
          <motion.div
            className="bg-white dark:bg-[#18181b] rounded-lg shadow-xl p-4 max-w-lg w-full relative flex flex-col items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-blue-600 text-xl"
              onClick={() => setModal(null)}
              aria-label="Close preview"
            >
              <FaTimes />
            </button>
            <img
              src={modal.image}
              alt={modal.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {modal.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {modal.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 text-center">
              {modal.desc}
            </p>
          </motion.div>
        </motion.div>
      )}

      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 relative z-10">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto relative z-10">
        {projects.map((proj, i) => {
          const controls = animations[i];
          return (
            <motion.div
              key={proj.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              animate={controls}
              onMouseMove={(e) => handleMouseMove(e, controls)}
              onMouseLeave={() => handleMouseLeave(controls)}
              className="bg-white/80 dark:bg-[#232946]/80 rounded-xl shadow-md border-2 border-transparent hover:border-blue-500 transition-all p-6 flex flex-col group hover:shadow-xl focus-within:border-blue-500 backdrop-blur-md relative overflow-hidden cursor-pointer"
              tabIndex={0}
              aria-label={proj.title + " project"}
              style={{ willChange: "transform" }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none z-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.18 }}
                transition={{ duration: 0.4 }}
                style={{
                  background:
                    "radial-gradient(circle at 60% 40%, #60a5fa88 0%, transparent 70%)",
                  filter: "blur(8px)",
                }}
              />
              <div className="overflow-hidden rounded-lg mb-6 relative z-10">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-56 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onClick={() => setModal(proj)}
                  style={{ cursor: "zoom-in" }}
                  tabIndex={0}
                  aria-label={proj.title + " preview image"}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1 z-10">
                {proj.title}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2 mb-2 z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
              >
                {proj.tech.map((t, j) => (
                  <motion.span
                    key={t}
                    custom={j}
                    variants={badgeVariants}
                    className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 z-10">
                {proj.desc}
              </p>
              <div className="flex gap-3 mt-auto z-10">
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                {proj.showGithub && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-4 py-2 rounded border-2 border-blue-600 text-blue-600 font-semibold bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="View Code on GitHub"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
