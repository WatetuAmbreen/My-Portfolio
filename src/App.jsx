import { useState } from "react";
import { motion } from "framer-motion"; // animations
import { Phone, Mail, MapPin } from "lucide-react";
import { Heart, Laptop, Network } from "lucide-react";

export default function App() {
  // Controls mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* ================= NAVIGATION BAR ================= */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
          {/* Logo / Name */}
          <h1 className="text-2xl font-bold">Ambreen Watetu</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <a href="#hero" className="hover:text-blue-600 transition">Home</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100 px-6 py-4 space-y-4">
            <a href="#hero" className="block hover:text-blue-600 transition">Home</a>
            <a href="#about" className="block hover:text-blue-600 transition">About</a>
            <a href="#projects" className="block hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="block hover:text-blue-600 transition">Contact</a>
          </div>
        )}
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        {/* ================= HERO ================= */}
        <motion.section
          id="hero"
          className="my-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Hello, I’m <span className="text-blue-600">Ambreen Edith Watetu</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A web developer passionate about creating simple, effective, and engaging
            websites with clean code and smooth user experiences.
          </p>
          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View My Work
          </a>
        </motion.section>

      {/* ================= ABOUT ================= */}
<motion.section
  id="about"
  className="my-20"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* Section Title */}
  <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>

  {/* Intro Text */}
  <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
    I’m a <span className="text-blue-600 font-medium">web developer</span> who enjoys building modern, responsive, and user-friendly websites. 
    My focus is on <span className="font-medium">clear design</span>, <span className="font-medium">efficient coding</span>, and creating <span className="font-medium">smooth user experiences</span>. 
    When I’m not coding, I love exploring creative projects and learning new technologies.
  </p>

  {/* Profile Picture */}
  <div className="flex justify-center mt-8">
    <img
      src="/profile.jpg" // replace with your image path
      alt="Ambreen Watetu"
      className="w-40 h-40 rounded-full border-4 border-blue-600 shadow-lg"
    />
  </div>

  {/* Skills / Technologies */}
  <motion.div
    className="flex flex-wrap justify-center gap-6 mt-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <span className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
      <i className="fab fa-react"></i> React
    </span>
    <span className="flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full font-medium">
      <i className="fab fa-js"></i> JavaScript
    </span>
    <span className="flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full font-medium">
      <i className="fab fa-css3-alt"></i> CSS
    </span>
    <span className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full font-medium">
      <i className="fab fa-html5"></i> HTML
    </span>
    <span className="flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full font-medium">
      Firebase
    </span>
  </motion.div>

  {/* Call to Action */}
  <div className="text-center mt-8">
    <a
      href="#projects"
      className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
      See My Work
    </a>
  </div>
</motion.section>

{/* ================= PROJECTS ================= */}
<motion.section
  id="projects"
  className="my-20"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  {/* Centered Title */}
  <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>

  {/* Projects Grid */}
  <div className="grid md:grid-cols-3 gap-6 items-stretch">
    {/* Project One */}
    <motion.div
      className="p-6 bg-white rounded-lg shadow border-t-4 border-transparent flex flex-col"
      whileHover={{
        scale: 1.02,
        boxShadow: [
          "0px 0px 0px rgba(239, 68, 68, 0.2)",
          "0px 0px 20px rgba(239, 68, 68, 0.5)",
          "0px 0px 0px rgba(239, 68, 68, 0.2)",
        ],
        borderColor: "#ef4444",
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <h3 className="text-xl font-bold mb-2">Blood Donation App</h3>
      <p className="text-gray-700 mb-4 flex-grow">
        My Blood Donation App connects life-saving donors with hospitals and patients in need. 
        Donors can easily register, track their donations, and share availability, while hospitals 
        can manage requests and match them with suitable donors. Built with React and Firebase, 
        the platform ensures a smooth, secure, and responsive experience.
      </p>
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="text-red-600 relative inline-block mt-auto after:content-[''] after:absolute after:w-full after:h-[2px] after:left-0 after:-bottom-1 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 pulse-glow-red"
      >
        View Project →
      </a>
    </motion.div>

    {/* Project Two */}
    <motion.div
      className="p-6 bg-white rounded-lg shadow border-t-4 border-transparent flex flex-col"
      whileHover={{
        scale: 1.02,
        boxShadow: [
          "0px 0px 0px rgba(34, 197, 94, 0.2)",
          "0px 0px 20px rgba(34, 197, 94, 0.5)",
          "0px 0px 0px rgba(34, 197, 94, 0.2)",
        ],
        borderColor: "#22c55e",
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
      <p className="text-gray-700 mb-4 flex-grow">
        A modern personal portfolio built with React, Tailwind CSS, and Framer Motion. 
        It showcases projects, skills, and experiences in a clean and responsive design, 
        with smooth animations and theme-based hover interactions.
      </p>
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="text-green-600 relative inline-block mt-auto after:content-[''] after:absolute after:w-full after:h-[2px] after:left-0 after:-bottom-1 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 pulse-glow-green"
      >
        View Project →
      </a>
    </motion.div>

    {/* Project Three */}
    <motion.div
      className="p-6 bg-white rounded-lg shadow border-t-4 border-transparent flex flex-col"
      whileHover={{
        scale: 1.02,
        boxShadow: [
          "0px 0px 0px rgba(59, 130, 246, 0.2)",
          "0px 0px 20px rgba(59, 130, 246, 0.5)",
          "0px 0px 0px rgba(59, 130, 246, 0.2)",
        ],
        borderColor: "#3b82f6",
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <h3 className="text-xl font-bold mb-2">Networking Labs</h3>
      <p className="text-gray-700 mb-4 flex-grow">
        A full hands-on networking course covering beginner to advanced levels. 
        Includes CCNA-style labs, routing, switching, security, and cloud integration. 
        Designed to provide practical knowledge for real-world employment opportunities.
      </p>
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 relative inline-block mt-auto after:content-[''] after:absolute after:w-full after:h-[2px] after:left-0 after:-bottom-1 after:bg-current after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 pulse-glow-blue"
      >
        View Project →
      </a>
    </motion.div>
  </div>

  {/* Custom Pulse Glow Animations */}
  <style jsx>{`
    @keyframes pulse-glow {
      0%, 100% {
        opacity: 1;
        text-shadow: 0 0 6px currentColor;
      }
      50% {
        opacity: 0.85;
        text-shadow: 0 0 12px currentColor;
      }
    }

    .pulse-glow-red:hover {
      animation: pulse-glow 1.5s infinite;
      color: #dc2626;
    }

    .pulse-glow-green:hover {
      animation: pulse-glow 1.5s infinite;
      color: #16a34a;
    }

    .pulse-glow-blue:hover {
      animation: pulse-glow 1.5s infinite;
      color: #2563eb;
    }
  `}</style>
</motion.section>


 {/* CONTACT SECTION */}
<motion.section
  id="contact"
  className="my-20 px-6"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
   <h2 className="text-4xl text-center font-bold mb-4">
  Get in Touch
</h2>

  <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12 text-center">
    We'd love to hear from you. Reach us through the details below or fill out the form.
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* LEFT: Contact Info Cards */}
    <div className="flex flex-col gap-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow flex items-center gap-4"
      >
        <Phone className="w-6 h-6 text-green-600" />
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-100">Phone</p>
          <p className="text-gray-600 dark:text-gray-400">+254 798295873</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow flex items-center gap-4"
      >
        <Mail className="w-6 h-6 text-green-600" />
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-100">Email</p>
          <p className="text-gray-600 dark:text-gray-400">ambreenwatetu1@gmail.com</p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow flex items-center gap-4"
      >
        <MapPin className="w-6 h-6 text-green-600" />
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-100">Address</p>
          <p className="text-gray-600 dark:text-gray-400">Nairobi, Kenya</p>
        </div>
      </motion.div>
    </div>

    {/* RIGHT: Contact Form */}
    <form
      action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
      method="POST"
      className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md"
    >
      {/* Name */}
      <div className="mb-6 text-left">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      {/* Email */}
      <div className="mb-6 text-left">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      {/* Message */}
      <div className="mb-6 text-left">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 outline-none"
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</motion.section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="p-6 bg-white shadow-inner text-center">
        <p>
          © {new Date().getFullYear()} Ambreen Edith Watetu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
