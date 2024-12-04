import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 min-h-screen flex items-center justify-center relative" >
      <div className="absolute left-6 md:left-10 top-3/4 transform -translate-y-1/2 flex flex-col items-center gap-4">
        {/* Social Icons */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-400 hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 dark:text-blue-300 hover:scale-110 transition-transform duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:scale-110 transition-transform duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 dark:text-pink-400 hover:scale-110 transition-transform duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center md:text-left">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight uppercase">
              Hi, I'm{" "}
              <span className="text-blue-500 dark:text-blue-400">Mrunal Biranwar</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl">
            A passionate <strong>Frontend Developer</strong> with a keen eye for design and a deep understanding of creating responsive, accessible, and visually captivating web experiences. Skilled in translating ideas into pixel-perfect, user-friendly interfaces, I specialize in bringing concepts to life with seamless functionality and stunning visuals.
            </p>
            <p className="mt-2 text-md md:text-lg">
              Let's build something amazing together.
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 transition duration-300"
              >
                Contact Me
              </a>
              <a
                href="#work"
                className="px-6 py-3 border border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:text-white transition duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
