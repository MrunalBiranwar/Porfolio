import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Matrimony Website",
      description:
        "A full-stack matrimony platform with user authentication, profile creation, and matchmaking functionality. Built with Next.js, Tailwind CSS, and Redux.",
      technologies: ["Next.js", "Tailwind CSS", "Redux"],
      link: "#",
    },
    {
      title: "E-commerce App",
      description:
        "A modern e-commerce application with product search, user reviews, and cart functionality. Fully responsive and optimized for speed.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive and interactive portfolio website showcasing projects and skills with light/dark mode toggle.",
      technologies: ["React", "Tailwind CSS"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500 dark:bg-blue-700 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
