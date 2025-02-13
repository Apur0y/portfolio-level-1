import { useState } from "react";
import { 
  FaHome, FaUser, FaCode, FaGraduationCap, 
  FaProjectDiagram, FaEnvelope, FaGithub, 
  FaLinkedin, FaFacebook, FaBars, FaTimes 
} from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu for mobile

  const navItems = [
    { name: "Home", icon: <FaHome />, id: "home" },
    { name: "About", icon: <FaUser />, id: "about" },
    { name: "Skills", icon: <FaCode />, id: "skills" },
    { name: "Education", icon: <FaGraduationCap />, id: "education" },
    { name: "Projects", icon: <FaProjectDiagram />, id: "projects" },
    { name: "Contact", icon: <FaEnvelope />, id: "contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/Apur0y" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/apu-roy-9192b9294/" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/apuroy2785" },
  ];

  const handleButton = (name, id) => {
    setActive(name);
    setIsMenuOpen(false); // Close menu on mobile when clicking a link

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* 🌟 Desktop Navigation (Left Sidebar) */}
      <div className="hidden md:flex flex-col lg:w-72 h-screen text-white fixed top-0 left-0 bg-gray-900 shadow-lg">
        <div className="md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-red-500 mx-auto mt-6">
          <img src="/new.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>

        <nav className="flex flex-col w-full mt-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center gap-3 w-full px-6 py-3 text-lg transition-all 
                ${active === item.name ? "bg-red-500/20 text-red-500" : "hover:text-red-500"}`}
              onClick={() => handleButton(item.name, item.id)}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="flex gap-4 pb-6 justify-center">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-300 hover:text-red-500 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* 🌟 Mobile Navigation Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-lg z-50">
        <h1 className="text-2xl font-bold">Apu Roy</h1>

        {/* 🍔 Menu Toggle Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl focus:outline-none">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 📱 Mobile Menu (Slide-in Sidebar) */}
      <div 
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white shadow-lg transform transition-transform duration-500 z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center py-8">
          {/* Profile Picture */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-500 mb-4">
            <img src="/new.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col w-full">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`flex items-center gap-3 w-full px-6 py-3 text-lg transition-all 
                  ${active === item.name ? "bg-red-500/20 text-red-500" : "hover:text-red-500"}`}
                onClick={() => handleButton(item.name, item.id)}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl transition-all duration-300 hover:text-red-500 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Close Button for Mobile Menu */}
          <button 
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Close Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
