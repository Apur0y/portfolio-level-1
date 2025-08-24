import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative mb-9">
      {/* 🔹 Background Video with Dark Overlay */}
     

      <section
        id="home"
        className="relative md:h-screen flex flex-col-reverse md:flex-row items-center justify-between md:px-16 text-white overflow-hidden z-20"
      >
        {/* Left Side */}
        <div className="md:max-w-2xl text-center md:text-start md:ml-16 md:w-3/5">
          <h1 className="md:text-4xl mt-7 font-extrabold drop-shadow-lg">
            I’m <span className="text-white">Apu Roy</span>
          </h1>
          <h2 className="text-2xl mt-2 drop-shadow-lg">
            <span className="text-[#FF014F] md:text-5xl lg:text-6xl font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "MERN Developer",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
              />
            </span>
          </h2>
          <p className="mt-4 text-gray-300 drop-shadow-md">
          Passionate Web developer with experience in building responsive and user friendly web applications.
          </p>
          <a
          className="flex justify-center md:justify-start"
          href="/Apu Roy MERN Developer.pdf" download>
            <button className="mt-9 cursor-pointer px-6 py-3 text-lg font-medium bg-[#FF014F] rounded-lg shadow-lg hover:bg-[#ff014dd5] transition-all flex items-center   gap-3 animate-pulse hover:animate-none active:scale-105">
              <FaDownload /> Resume
            </button>
          </a>
        </div>

        {/* Right Side - Profile Image */}
        <div className="relative mt-20 md:w-96 flex justify-center">
          {/* Red Glow Background */}
          <div className="absolute top-48 md:-top-10 md:-left-10 md:w-80 md:h-96 bg-[#FF014F] blur-[100px] opacity-40 -z-10"></div>

          {/* Profile Image with Better Visibility */}
          <img
            src="/Apu Roy.png"
            alt="Apu Roy"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-lg border-4 border-neutral-800 z-30"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
