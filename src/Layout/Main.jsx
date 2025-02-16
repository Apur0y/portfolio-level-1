import React, { useEffect, useState } from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Skills from "../pages/Home/Skills/Skills";
import Education from "../pages/Home/Education/Education";
import Footer from "../pages/Shared/Footer/Footer";
import Projects from "../pages/Home/Projects/Projects";
import Contact from "../pages/Home/Contact/Contact";
import { IoArrowUpCircle } from "react-icons/io5";

const Main = () => {
  const [top, setTop] = useState(false);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY > 100); // Only show when scrolled past 100px
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex relative bg-black">
      {/* Scroll-to-Top Icon (Only Shows When Scrolled Down) */}
      {top && (
        <div className="z-80 fixed text-white bottom-4 right-4 cursor-pointer">
          <IoArrowUpCircle
            onClick={handleTop}
            className="size-6 md:size-10 animate-bounce transition-all duration-1000 ease-in-out"
          />
        </div>
      )}

      {/* Navigation */}
      <div>
        <div className="z-50 w-full fixed md:w-64">
          <Navbar />
        </div>
      </div>

      <div className="md:flex-1 md:ml-64 w-full">
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
