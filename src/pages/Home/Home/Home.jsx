import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative mb-9">
      {/* 🔹 Background Video */}
      
      <section
        id="home"
        className="relative md:h-screen flex flex-col-reverse md:flex-row items-center justify-between px-16 text-white overflow-hidden "
      >
        <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-30 opacity-10"
      >
        <source src="/black-node.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        {/* Left Side */}
        <div className="md:max-w-2xl md:w-1/2">
          <h1 className="md:text-7xl mt-7 font-extrabold">
            I’m <span className="text-white">Apu Roy</span>
          </h1>
          <h2 className="text-3xl mt-2">
            <span className="text-[#FF014F] md:text-4xl font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "MERN Stack Developer",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
              />
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            A personal portfolio showcases my work, achievements, and skills
            that highlight my professional growth.
          </p>
          <a href="/resume.pdf" download>
            <button
              className="mt-9 px-6 py-3 text-lg font-medium bg-[#FF014F] rounded-lg shadow-lg hover:bg-red-700 transition-all flex items-center gap-3 animate-pulse hover:animate-none active:scale-105"
            >
              <FaDownload /> Resume
            </button>
          </a>
        </div>

        {/* Right Side - Profile Image */}
        <div className="relative mt-20 md:w-96 flex justify-center">
          {/* Red Glow Background */}
          <div className="absolute top-48 md:-top-10 md:-left-10 md:w-80 md:h-96 bg-red-500 blur-[100px] opacity-40 -z-10"></div>

          {/* Profile Image without Frame */}
          <img
            src="/Apu Roy.png"
            alt="Apu Roy"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-lg border-4 border-neutral-800"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
