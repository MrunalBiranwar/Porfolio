import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-500 dark:bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
