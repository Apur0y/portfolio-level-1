import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Skills from "../pages/Home/Skills/Skills";
import Education from "../pages/Home/Education/Education";
import Footer from "../pages/Shared/Footer/Footer";
import Projects from "../pages/Home/Projects/Projects";
import Contact from "../pages/Home/Contact/Contact";

const Main = () => {



  return (
    <div className="flex bg-black">
      {/* Navigations */}
   <div>
   <div className=" hidden md:flex fixed h-screen w-64">
        <Navbar></Navbar>

        <div>
          <div>

          </div>
   </div>
          
        </div>
      </div>

      <div className="md:flex-1 md:ml-64">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
