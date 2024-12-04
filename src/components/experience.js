import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "ShubhChintak Technology Pvt Ltd.",
      duration: "July 2024 - Present",
      description:
        "Developed and maintained user interfaces for client applications, ensuring responsive designs and excellent user experiences.",
    },
    {
      role: "Web Developer Intern",
      company: "Codemate IT Services Pvt.Ltd",
      duration: "June 2023 – July 2023",
      description:
        "Collaborated with cross-functional teams to deliver high-quality software features, focusing on performance and scalability.",
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      duration: "2019 - 2020",
      description:
        "Designed and implemented websites for small businesses, enhancing their online presence and customer engagement.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className=" dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {exp.role}
              </h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                {exp.company}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.duration}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
