import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className="w-10/12 bg-neutral-900 mx-auto shadow-lg p-6 md:p-12 rounded-lg min-h-screen text-white"
    
    >
      <h2 className="text-3xl font-bold mb-4 text-[#FF014F] text-center border-b-2">About Me</h2>
      <p className="text-lg leading-7 mb-4">
        Hi, I’m Apu Roy, a passionate web developer. My journey into web development is driven by a love for creating seamless and engaging user experiences.
      </p>
      <p className="text-lg leading-7 mb-4">
        I specialize in building modern web applications using technologies like React, Tailwind CSS, MongoDB and JavaScript. Whether it's designing a responsive webpage, implementing complex features, or managing dynamic data, I enjoy turning ideas into reality. My recent projects include a cricket team management app, a gadget-buying platform, and data visualizations with Recharts.
      </p>
      <p className="text-lg leading-7 mb-4">
        When I’m not coding , you can find me exploring new technologies, diving into my academic interests, like my ongoing thesis on finite element methods in mathematics or if I get some free time love to play guiter.
      </p>
      <p className="text-lg leading-7">Let’s collaborate to bring your ideas to life!</p>
    </motion.div>
  );
};

export default About;
