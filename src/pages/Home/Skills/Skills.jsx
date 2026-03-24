import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaFigma, FaStripe } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript, SiExpress, SiFirebase, SiJsonwebtokens, SiAxios, SiNetlify, SiVercel, SiReactrouter, SiNextdotjs, SiRedux, SiSocketdotio, SiPostman, SiZod, SiAdobeacrobatreader } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { TbApi } from "react-icons/tb";


const Skills = () => {
const skillCategories = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-6xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-6xl" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500 text-6xl" /> },
    { name: "RTK Query", icon: <SiRedux className="text-purple-400 text-6xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-6xl" /> },
    { name: "React Router", icon: <SiReactrouter className="text-red-400 text-6xl" /> },
  ],

  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400 text-6xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-500 text-6xl" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-blue-700 text-6xl" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-white text-6xl" /> },
    { name: "REST API", icon: <TbApi className="text-green-400 text-6xl" /> },
  ],

  Tools: [
    { name: "Git", icon: <FaGit className="text-orange-600 text-6xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-600 text-6xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500 text-6xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-white text-6xl" /> },
    { name: "Netlify", icon: <SiNetlify className="text-emerald-400 text-6xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500 text-6xl" /> },
  ],

  Others: [
    { name: "Zod", icon: <SiZod className="text-blue-400 text-6xl" /> },
    { name: "Stripe", icon: <FaStripe className="text-indigo-500 text-6xl" /> },
    { name: "JSPDF", icon: <SiAdobeacrobatreader className="text-red-500 text-6xl" /> },
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
        className="text-center  text-xl md:text-3xl font-bold mb-8 border-b-2 border-b-[#FF014F] pb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[#FF014F]">My Skills</span>
        
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
          <h2 className="text-2xl md:text-xl font-bold text-center mb-6">{category}</h2>
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-6 gap-8 w-10/12 mx-auto">
            {skillCategories[category].map((skill, index) => (
              <Tilt key={index}>
                <motion.div
                  className="flex w-20 text-xs md:w-full flex-col text-white items-center bg-neutral-900 shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {skill.icon}
                  <h2 className="text-xs md:text-lg font-semibold mt-4 overflow-hidden">{skill.name}</h2>
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
