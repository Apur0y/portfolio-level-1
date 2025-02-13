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
        className="h-screen flex items-center justify-between px-16 bg-black text-white relative overflow-hidden"
      >
        {/* Left Side */}
        <div className="max-w-2xl">
          <h2 className="text-gray-500 text-lg uppercase tracking-widest">
            Hello
          </h2>
          <h1 className="text-7xl font-extrabold">
            I’m <span className="text-white">Apu Roy</span>
          </h1>
          <h2 className="text-3xl mt-2">
            A{" "}
            <span className="text-red-500 font-bold">
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
          <button
  className={`fixed px-6 py-3 text-lg z-30 font-medium bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transition-all flex items-center gap-3 
  ${isScrolled ? "top-5 right-10 scale-90" : "mt-5"} animate-pulse hover:animate-none active:scale-105`}
>
  <FaDownload /> Resume
</button>

        </div>

        {/* Right Side - Profile Image */}
        <div className="relative w-96 flex justify-center">
          {/* Red Glow Background */}
          <div className="absolute -top-10 -left-10 w-80 h-96 bg-red-500 blur-[100px] opacity-40 -z-10"></div>

          {/* Profile Image without Frame */}
          <img
            src="/ar3.png"
            alt="Apu Roy"
            className="w-72 h-72 rounded-full object-cover shadow-lg border-4 border-gray-700"
          />
        </div>

        {/* Floating Portfolio Button */}
      </section>
      {/* <a
        href="/resume.pdf"
        download
        className={`fixed px-6 py-3 text-lg font-medium bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transition-all flex items-center gap-3 ${
          isScrolled ? "top-5 right-10 scale-90" : "mt-5"
        }`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <FaDownload /> View Portfolio
      </a> */}
    </div>
  );
};

export default Home;
