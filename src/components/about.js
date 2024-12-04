import React from "react";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 500, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8 transition duration-300">
          About Me
        </h2>
        <div className="flex flex-col items-center w-full">
          {/* Profile Image */}
          {/*<div className="w-full md:w-1/2 mb-6 md:mb-0">
             <Tilt
              options={defaultOptions}
              style={{
                height: "300px", // Adjusted height
                width: "300px", // Adjusted width
              }}
            >
              <img
                src="/path-to-your-photo.jpg"
                alt="Profile"
                className="rounded-full mx-auto"
              />
            </Tilt> 
          </div> */}

          {/* Text Content */}
          <div className="w-full md:w-full text-gray-600 dark:text-gray-300 text-center md:text-left transition duration-300">
            <p className="text-lg leading-relaxed mb-4">
              Hi! I'm a passionate web developer with a knack for creating
              sleek, responsive, and user-friendly websites. With a focus on
              modern design and seamless functionality, I aim to bring your
              ideas to life in the digital world.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I specialize in technologies like ReactJS, Tailwind CSS, and
              FastAPI, and I’m constantly exploring new trends to keep up with
              the ever-evolving web development landscape.
            </p>

            {/* CTA Button */}
            <a
              href="#contact"
              className="px-6 py-3 inline-block bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 transition duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
