import { useState } from "react";
import { 
  FaHome, FaUser, FaCode, FaGraduationCap, 
  FaProjectDiagram, FaEnvelope, FaGithub, 
  FaLinkedin, FaFacebook, FaBars, FaTimes 
} from "react-icons/fa";

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/apu-r0y/" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/apuroy2785" },
  ];

  const handleButton = (id) => {
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* 🌟 Desktop Navigation (Left Sidebar) */}
      <div className="hidden md:flex justify-between flex-col lg:w-72 h-screen bg-gradient-to-br from-neutral-900 via-neutral-950 to-[#3F101F] text-white fixed top-0 left-0 bg-gray-900 shadow-lg">
        <div className="md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-neutral-700 mx-auto mt-6">
          <img src="/new.jpg" alt="Profile" className="object-cover" />
        </div>

        <nav className="flex gap-4 flex-col w-11/12 ml-6 mt-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center mx-auto gap-3 w-56 px-3 py-2 text-md transition-all rounded-lg font-semibold duration-500
                ${activeSection === item.id ? "bg-[#3d0c1a] text-[#FF014F]" : "hover:text-[#FF014F]"}`}
              onClick={() => handleButton(item.id)}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="divider"></div>
        <div className="flex  pb-6 justify-around w-10/12 mx-auto">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl transition-all duration-300 hover:mx-3 hover:text-red-500 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* 🌟 Mobile Navigation Bar */}
   {/* 🌟 Mobile Navigation Bar */}
<div className="md:hidden bg-gradient-to-br from-[#3F101F] via-neutral-950 to-[#3F101F] p-4">
  <div className="flex justify-between items-center">
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl">
      {isMenuOpen ? <FaTimes /> : <FaBars />}
    </button>
    <a className="text-white text-xl font-semibold">Apu Roy</a>
    <div className="flex gap-4">
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

  {/* Menu Items - Show when `isMenuOpen` is true */}
  {isMenuOpen && (
    <div className="mt-4 bg-neutral-900 p-4 rounded-lg shadow-lg">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`flex items-center gap-3 w-full px-4 py-2 text-lg rounded-md transition-all
            ${activeSection === item.id ? "bg-[#3d0c1a] text-[#FF014F]" : "hover:text-[#FF014F]"}`}
          onClick={() => handleButton(item.id)}
        >
          {item.icon}
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  )}
</div>

    </>
  );
};

export default Navbar;
