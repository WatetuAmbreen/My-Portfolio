import { useState } from "react";
import { motion } from "framer-motion"; // for smooth animations

export default function App() {
  // State for controlling mobile navigation menu
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
            <a href="#hero" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gray-100 px-6 py-4 space-y-4">
            <a href="#hero" className="block hover:text-blue-600 transition">
              Home
            </a>
            <a href="#about" className="block hover:text-blue-600 transition">
              About
            </a>
            <a href="#projects" className="block hover:text-blue-600 transition">
              Projects
            </a>
            <a href="#contact" className="block hover:text-blue-600 transition">
              Contact
            </a>
          </div>
        )}
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-6 max-w-5xl mx-auto">
        {/* HERO SECTION */}
        <motion.section
          id="hero"
          className="my-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Hello, I’m{" "}
            <span className="text-blue-600">Ambreen Edith Watetu</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A web developer passionate about creating simple, effective, and
            engaging websites with clean code and smooth user experiences.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            View My Work
          </button>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section
          id="about"
          className="my-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m a developer who enjoys building modern, responsive, and
            user-friendly websites. My focus is on clear design, efficient
            coding, and creating smooth user experiences. When I’m not coding, I
            love exploring creative projects and learning new technologies.
          </p>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section
          id="projects"
          className="my-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project One */}
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">Project One</h3>
              <p className="text-gray-600 mb-4">
                Short description of your project goes here. What problem it
                solves, what tech you used, and why it’s special.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                View Project →
              </a>
            </div>

            {/* Project Two */}
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2">Project Two</h3>
              <p className="text-gray-600 mb-4">
                Another project description goes here. Highlight your role and
                the impact it made.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                View Project →
              </a>
            </div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          className="my-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            Feel free to reach out if you'd like to work together!
          </p>

          {/* Contact Info Block */}
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-left">
            {/* Email */}
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">Email</p>
                <a
                  href="mailto:alex@example.com"
                  className="text-blue-600 hover:underline"
                >
                  ambreenwatetu1@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">Location</p>
                <p className="text-gray-600">Kenya, Nairobi</p>
              </div>
            </div>
          </div>

          {/* Old button (optional) */}
          <div className="mt-8">
            <a
              href="mailto:alex@example.com"
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Email Me
            </a>
          </div>
        </motion.section>
      </main> {/* ✅ properly closing main */}

      {/* ================= FOOTER ================= */}
      <footer className="p-6 bg-white shadow-inner text-center">
        <p>
          © {new Date().getFullYear()} Ambreen Edith Watetu. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
