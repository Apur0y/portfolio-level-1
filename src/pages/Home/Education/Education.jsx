import React, { useState } from "react";
import { motion } from "framer-motion";

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Mathematics",
      institution:
        "Gopalganj Science and Technology University, Gopalganj.",
      year: "2020 - present",
      description:
        "Focused on software development, data structures, and algorithms. Graduated with honors.",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "BAF Shaheen College, Jashore.",
      year: "2016 - 2018",
      description:
        "Majored in Science, with a focus on Physics, Chemistry, and Mathematics.",
    },
  ];

  return (
    <section className="py-10" id="education">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-[#FF014F] font-bold text-center mb-8 border-b-2 pb-4">
          Education
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-11/12 mx-auto">
          {educationList.map((education, index) => (
            <HoverCard key={index} education={education} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate component to manage hover state per card
const HoverCard = ({ education }) => {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPos({ x, y });
  };

  return (
    <div
      className="relative bg-neutral-900 p-1 shadow-md rounded-lg transition-transform duration-300 transform origin-center overflow-hidden"
      onMouseMove={(e) => {
        setIsHovered(true);
        handleMouseMove(e);
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? `radial-gradient(200px circle at ${hoverPos.x}px ${hoverPos.y}px, #FF014F, transparent)`
          : "transparent",
        transition: "background 0.3s ease-in-out",
      }}
    >
         <motion.div
          
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=""
        >
  <div className="bg-neutral-900 h-44 rounded-lg shadow-sm">
        <div className="card-body">
          <h3 className="text-xl font-semibold text-white">
            {education.institution}
          </h3>
          <p className="text-white">{education.degree}</p>
          <span className="text-white text-sm">{education.year}</span>

        </div>
      </div>

        </motion.div>
    
    </div>
  );
};

export default Education;
