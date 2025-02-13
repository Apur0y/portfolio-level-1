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
    <div>
      <section
        id="home"
        className="md:h-screen flex flex-col-reverse md:flex-row   items-center justify-between px-16  text-white  overflow-hidden"
      >
        {/* Left Side */}
        <div className="md:max-w-2xl w-1/2">
       
          <h1 className="md:text-7xl font-extrabold">
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
          <a 
           href="/resume.pdf"
           download
           >
            <button
              className={` mt-9 px-6 py-3 text-lg z-30 font-medium bg-[#FF014F] rounded-lg shadow-lg hover:bg-red-700 transition-all flex items-center gap-3 
   animate-pulse hover:animate-none active:scale-105`}
            >
              <FaDownload /> Resume
            </button>
          </a>
        </div>

        {/* Right Side - Profile Image */}
        <div className="relative  md:w-96 flex justify-center">
          {/* Red Glow Background */}
          <div className="absolute -top-10 -left-10 w-80 h-96 bg-red-500 blur-[100px] opacity-40 -z-10"></div>

          {/* Profile Image without Frame */}
          <img
            src="/Apu Roy.png"
            alt="Apu Roy"
            className="w-96 h-96 rounded-full object-cover shadow-lg border-4 border-gray-700"
          />
        </div>

        {/* Floating Portfolio Button */}
      </section>
      
    </div>
  );
};

export default Home;
