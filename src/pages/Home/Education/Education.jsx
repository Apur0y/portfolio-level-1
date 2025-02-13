import React, { useState } from "react";
import "./navbar.css"

const Education = () => {
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setHoverPos({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  const educationList = [
    {
      degree: "Bachelor of Mathematics",
      institution: "Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj.",
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
        <h2 className="text-2xl md:text-3xl text-[#FF014F] font-bold text-center mb-8 border-b-2 pb-4">Education</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-11/12 mx-auto">
          {educationList.map((education, index) => (
            <div
              key={index}
              className="relative love bg-neutral-900 p-6 shadow-md rounded-lg transition-transform duration-300 transform origin-center  overflow-hidden"
              onMouseMove={handleMouseMove}
            >
              {/* <div
                className="absolute inset-0 bg-transparent pointer-events-none"
                style={{
                  background: `radial-gradient(150px circle at ${hoverPos.x}px ${hoverPos.y}px, rgba(255, 255, 255, 0.2), transparent)`,
                }}
              ></div> */}

              <h3 className="text-xl font-semibold text-white">{education.institution}</h3>
              <p className="text-white">{education.degree}</p>
              <span className="text-white text-sm">{education.year}</span>
              <p className="mt-4 text-white">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
