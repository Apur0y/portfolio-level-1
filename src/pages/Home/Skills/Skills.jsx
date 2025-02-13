import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = {
    Frontend: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
      { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-6xl" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" /> },
    ],
    Tools: [
      { name: "Git", icon: <FaGit className="text-orange-600 text-6xl" /> },
      { name: "Github", icon: <FaGithub className="text-gray-600 text-6xl" /> },
    ],
  };

  return (
    <motion.div
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.2 }}
      className="py-12"
    >
      {/* Section Title */}
      <motion.h1
        className="text-center text-3xl md:text-5xl font-bold mb-8 border-b-2 pb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>

      {/* Skill Categories */}
      {Object.keys(skillCategories).map((category) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 w-10/12 mx-auto">
            {skillCategories[category].map((skill, index) => (
              <Tilt key={index}>
                <motion.div
                  className="flex flex-col text-white items-center bg-neutral-900 shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill.icon}
                  <h2 className="text-lg font-semibold mt-4">{skill.name}</h2>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
