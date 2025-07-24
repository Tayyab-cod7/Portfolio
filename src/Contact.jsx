import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

const socials = [
  { icon: <FaGithub />, url: "https://github.com/Tayyab-cod7", label: "GitHub" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/muhammad-tayyab-611907376", label: "LinkedIn" },
  { icon: <FaEnvelope />, url: "mailto:stackcraft.com@gmail.com", label: "Email" },
];

const labelVariants = {
  initial: { y: 0, scale: 1, color: "#6b7280" },
  floated: { y: -22, scale: 0.85, color: "#2563eb" },
};

export default function Contact() {
  const [focus, setFocus] = useState({ name: false, email: false, message: false });
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [ripple, setRipple] = useState(false);
  const [state, handleSubmit] = useForm("mdkderyg");

  // Floating label logic
  const isFloated = field => focus[field] || values[field];

  // Button ripple
  const handleButtonClick = e => {
    setRipple(true);
    setTimeout(() => setRipple(false), 400);
  };

  if (state.succeeded) {
    return (
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[60vh] py-16 px-6 md:px-12 flex flex-col items-center justify-center bg-white dark:bg-[#1f1f1f] overflow-hidden"
        aria-label="Contact section"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.7 }}
          className="flex flex-col items-center justify-center gap-2 text-center text-lg text-green-600 dark:text-green-400 font-semibold min-h-[180px]"
        >
          <FaCheckCircle className="text-4xl text-green-500 dark:text-green-400 mb-2" />
          Thank you! Your message has been sent.
        </motion.div>
      </motion.section>
    );
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[60vh] py-16 px-6 md:px-12 flex flex-col items-center justify-center bg-white dark:bg-[#1f1f1f] overflow-hidden"
      aria-label="Contact section"
    >
      {/* Animated Gradient Background */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 z-0 dark:hidden"
        style={{ background: "radial-gradient(circle at 60% 40%, #60a5fa33 0%, transparent 70%)" }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-2"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center text-md md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
      >
        Feel free to reach out for collaborations or just a friendly hello!
      </motion.p>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-10 items-stretch justify-center">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 bg-white dark:bg-[#18181b] rounded-xl shadow-lg p-8 flex flex-col justify-center"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            aria-label="Contact form"
            autoComplete="off"
          >
            {/* Name Field */}
            <div className="relative mb-2">
              <motion.label
                htmlFor="name"
                className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none bg-transparent px-1 transition-all"
                animate={isFloated("name") ? "floated" : "initial"}
                variants={labelVariants}
                style={{ background: "inherit" }}
              >
                Name
              </motion.label>
              <motion.input
                id="name"
                type="text"
                name="name"
                required
                value={values.name}
                onFocus={() => setFocus(f => ({ ...f, name: true }))}
                onBlur={() => setFocus(f => ({ ...f, name: false }))}
                onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
                className="w-full p-3 pt-6 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                whileFocus={{ scale: 1.03 }}
                aria-label="Your Name"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            {/* Email Field */}
            <div className="relative mb-2">
              <motion.label
                htmlFor="email"
                className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none bg-transparent px-1 transition-all"
                animate={isFloated("email") ? "floated" : "initial"}
                variants={labelVariants}
                style={{ background: "inherit" }}
              >
                Email
              </motion.label>
              <motion.input
                id="email"
                type="email"
                name="email"
                required
                value={values.email}
                onFocus={() => setFocus(f => ({ ...f, email: true }))}
                onBlur={() => setFocus(f => ({ ...f, email: false }))}
                onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
                className="w-full p-3 pt-6 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                whileFocus={{ scale: 1.03 }}
                aria-label="Your Email"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            {/* Message Field */}
            <div className="relative mb-2">
              <motion.label
                htmlFor="message"
                className="absolute left-4 top-6 pointer-events-none bg-transparent px-1 transition-all"
                animate={isFloated("message") ? "floated" : "initial"}
                variants={labelVariants}
                style={{ background: "inherit" }}
              >
                Message
              </motion.label>
              <motion.textarea
                id="message"
                name="message"
                required
                value={values.message}
                onFocus={() => setFocus(f => ({ ...f, message: true }))}
                onBlur={() => setFocus(f => ({ ...f, message: false }))}
                onChange={e => setValues(v => ({ ...v, message: e.target.value }))}
                rows={5}
                className="w-full p-3 pt-8 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                whileFocus={{ scale: 1.03 }}
                aria-label="Your Message"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              onClick={handleButtonClick}
              className={`mt-2 px-8 py-3 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 relative overflow-hidden ${ripple ? 'animate-bounce' : ''}`}
              aria-label="Send Message"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message"}
              {/* Ripple effect (visual only) */}
              {ripple && (
                <span className="absolute left-1/2 top-1/2 w-24 h-24 bg-blue-400/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping pointer-events-none" />
              )}
            </motion.button>
          </form>
        </motion.div>
        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-row md:flex-col items-center justify-center gap-8 md:gap-6 flex-shrink-0 md:w-40 mt-8 md:mt-0"
          aria-label="Social media links"
        >
          {socials.map(s => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              whileHover={{ scale: 1.18 }}
              className="text-3xl text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 relative"
            >
              {/* Glassmorphism/Glow effect */}
              <motion.span
                className="absolute inset-0 rounded-full pointer-events-none z-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.18 }}
                transition={{ duration: 0.4 }}
                style={{ background: 'radial-gradient(circle at 60% 40%, #60a5fa88 0%, transparent 70%)', filter: 'blur(8px)' }}
              />
              <span className="relative z-10">{s.icon}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 