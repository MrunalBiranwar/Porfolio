import React, { useState } from "react";

const Skills = () => {
  // Define skills categorized by Frontend, Backend, and Other, including icons
  const allSkills = {
    Frontend: [
      { name: "HTML", icon: "fab fa-html5" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "ReactJS", icon: "fab fa-react" },
      { name: "NextJS", icon: "fas fa-code" },
      { name: "React Native", icon: "fab fa-react" },
      { name: "BootStrap", icon: "fab fa-bootstrap"},
      { name: "Tailwind CSS", icon: "fas fa-wind" },
    ],
    Backend: [
      { name: "FastAPI", icon: "fas fa-cloud" },
      { name: "Node.js", icon: "fab fa-node" },
      { name: "Express", icon: "fas fa-server" },
    ],
    Other: [
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "Github", icon: "fab fa-github" },
      { name: "Figma", icon: "fab fa-figma" },
      { name: "Java", icon: "fab fa-java" },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Frontend");

  return (
    <section
      id="skills"
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8 transition duration-300">
          Skills
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(allSkills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium text-gray-800 dark:text-white transition duration-300 ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 text-center justify-center">
          {allSkills[activeCategory].map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <i
                className={`${skill.icon} text-5xl text-blue-500 dark:text-blue-400 mb-4`}
                aria-hidden="true"
              ></i>
              {/* Skill Name */}
              <span className="text-gray-800 dark:text-gray-200 text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
