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

      <div className="md:flex-1 md:ml-64 w-full">
        <section ref={sectionRefs.home} id="home"><Home /></section>
        <section ref={sectionRefs.about} id="about"><About /></section>
        <section ref={sectionRefs.skills} id="skills"><Skills /></section>
        <section ref={sectionRefs.education} id="education"><Education /></section>
        <section ref={sectionRefs.projects} id="projects"><Projects /></section>
        <section ref={sectionRefs.contact} id="contact"><Contact /></section>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
