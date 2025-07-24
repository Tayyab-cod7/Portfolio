import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFigma, FaGithub, FaCode , FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux, SiExpress, SiTypescript, SiBootstrap } from "react-icons/si";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { icon: <FaHtml5 />, name: "HTML5", desc: "Markup language for the web", level: 95 },
      { icon: <FaCss3Alt />, name: "CSS3", desc: "Styling for web pages", level: 90 },
      { icon: <FaJs />, name: "JavaScript", desc: "Programming language of the web", level: 92 },
      { icon: <FaReact />, name: "React", desc: "UI library for building interfaces", level: 88 },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", desc: "Utility-first CSS framework", level: 85 },
      { icon: <SiBootstrap />, name: "Bootstrap", desc: "Frontend CSS framework", level: 85 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", desc: "JavaScript runtime for backend", level: 80 },
      { icon: <SiExpress />, name: "Express.js", desc: "Web framework for Node.js", level: 78 },
      { icon: <SiMongodb />, name: "MongoDB", desc: "NoSQL database", level: 70 },
    ],
  },
  {
    label: "Tools",
    skills: [
      { icon: <FaGitAlt />, name: "Git", desc: "Version control system", level: 85 },
      { icon: <FaGithub />, name: "GitHub", desc: "Code hosting platform", level: 85 },
      { icon: <FaCode />, name: "VS Code", desc: "Code editor", level: 90 },
      { icon: <FaFigma />, name: "Figma", desc: "UI/UX design tool", level: 70 },
      { icon: <FaWordpress />, name: "WordPress", desc: "Content management system", level: 75 },
    ],
  },
];

const allIcons = [
  <FaHtml5 key="html" />, <FaCss3Alt key="css" />, <FaJs key="js" />, <FaReact key="react" />, <SiTailwindcss key="tailwind" />, <SiRedux key="redux" />, <SiTypescript key="ts" />,
  <FaNodeJs key="node" />, <SiExpress key="express" />, <SiMongodb key="mongo" />, <FaGitAlt key="git" />, <FaGithub key="github" />, <FaCode key="vscode" />, <FaFigma key="figma" />
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.15 + i * 0.09, type: "spring", bounce: 0.3 } }),
};

function CircularMeter({ value, color }) {
  // value: 0-100
  const radius = 28;
  const stroke = 5;
  const norm = 2 * Math.PI * radius;
  const pct = Math.max(0, Math.min(100, value));
  return (
    <svg width="64" height="64" className="block" aria-hidden="true">
      <circle cx="32" cy="32" r={radius} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
      <motion.circle
        cx="32" cy="32" r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={norm}
        strokeDashoffset={norm * (1 - pct / 100)}
        initial={{ strokeDashoffset: norm }}
        whileInView={{ strokeDashoffset: norm * (1 - pct / 100) }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ filter: `drop-shadow(0 0 6px ${color}66)` }}
      />
    </svg>
  );
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[60vh] py-16 px-6 md:px-12 bg-white dark:bg-[#1f1f1f] overflow-hidden"
      aria-label="Skills section"
    >
      {/* Animated Gradient Background */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: "radial-gradient(circle at 60% 40%, #60a5fa33 0%, transparent 70%)" }}
      />
      {/* Animated Marquee Row of Icons */}
      <div className="overflow-x-hidden mb-8">
        <motion.div
          className="flex gap-10 animate-marquee whitespace-nowrap"
          style={{ animation: "marquee 18s linear infinite" }}
        >
          {allIcons.concat(allIcons).map((icon, i) => (
            <span key={i} className="text-3xl md:text-4xl text-blue-600 dark:text-blue-400 opacity-80 hover:opacity-100 transition-opacity duration-200">
              {icon}
            </span>
          ))}
        </motion.div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8 relative z-10">Skills & Tech Stack</h2>
      <div className="flex flex-col gap-12 relative z-10">
        {skillCategories.map((cat, catIdx) => (
          <div key={cat.label}>
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 text-center md:text-left">{cat.label}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.09, boxShadow: "0 8px 32px 0 rgba(60,132,247,0.18)", filter: "blur(0px) brightness(1.1)" }}
                  className="flex flex-col items-center justify-center bg-white/80 dark:bg-[#232946]/80 p-5 rounded-2xl shadow-md transition-all hover:scale-105 hover:shadow-xl group cursor-pointer relative backdrop-blur-md border border-blue-100 dark:border-blue-900"
                  tabIndex={0}
                  aria-label={skill.name + ' skill'}
                >
                  <div className="relative mb-2">
                    <CircularMeter value={skill.level} color="#3b82f6" />
                    <span className="absolute inset-0 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl font-bold pointer-events-none select-none">
                      {skill.icon}
                    </span>
                  </div>
                  <span className="mt-2 text-sm md:text-md font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  {/* Tooltip */}
                  <span className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-gray-800 text-white text-xs rounded px-3 py-1 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-20">
                    {skill.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Marquee animation keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </motion.section>
  );
} 