import React, { useEffect, useState, useRef } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY > 100);

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // 50% visibility threshold
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);

      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.observe(ref.current);
      });

      return () => {
        Object.values(sectionRefs).forEach((ref) => {
          if (ref.current) observer.unobserve(ref.current);
        });
      };
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex relative bg-black text-white">
      {/* Scroll-to-Top Icon */}
      {top && (
        <div className="z-80 fixed text-white bottom-4 right-4 cursor-pointer">
          <IoArrowUpCircle
            onClick={handleTop}
            className="size-6 md:size-10 animate-bounce transition-all duration-1000 ease-in-out"
          />
        </div>
      )}

      {/* Navigation with Active Section */}
      <div>
        <div className="z-50 w-full fixed md:w-64">
          <Navbar activeSection={activeSection} />
        </div>
      </div>

      <div className="relative md:flex-1 md:ml-64 w-full z-10">
        <div className="absolute top-0 left-0 w-full h-full z-10 opacity-55">
          <video
            autoPlay
            loop
            muted
            className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source src="/black-node.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Overlay for better text readability */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div> */}
        </div>
        <section ref={sectionRefs.home} id="home">
          <Home />
        </section>
           <section className="relative z-20" ref={sectionRefs.projects} id="projects">
          <Projects />
        </section>
        <section className="relative z-10" ref={sectionRefs.about} id="about">
          <About />
        </section>
        <section className="relative z-10" ref={sectionRefs.skills} id="skills">
          <Skills />
        </section>
        <section className="relative z-10" ref={sectionRefs.education} id="education">
          <Education />
        </section>
     
        <section className="relative z-10" ref={sectionRefs.contact} id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
