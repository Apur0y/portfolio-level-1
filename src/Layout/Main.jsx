import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Skills from "../pages/Home/Skills/Skills";
import Education from "../pages/Home/Education/Education";
import Footer from "../pages/Shared/Footer/Footer";
import Projects from "../pages/Home/Projects/Projects";

const Main = () => {
  return (
    <div className="flex bg-black">
      {/* Navigations */}
      <div className="flex fixed h-screen w-64">
        <Navbar></Navbar>
      </div>

      <div className="flex-1 ml-64">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
