import { useState } from "react";
import { 
  FaHome, FaUser, FaCode, FaGraduationCap, 
  FaProjectDiagram, FaEnvelope, FaGithub, 
  FaLinkedin, FaTwitter, 
  FaFacebook
} from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const navItems = [
    { name: "Home", icon: <FaHome />, id: "home" },
    { name: "About", icon: <FaUser />, id: "about" },
    { name: "Skills", icon: <FaCode />, id: "skills" },
    { name: "Education", icon: <FaGraduationCap />, id: "education" },
    { name: "Projects", icon: <FaProjectDiagram />, id: "projects" },
    { name: "Contact", icon: <FaEnvelope />, id: "contact" },
  ];

  const handleButton = (name, id) => {
    setActive(name);

    // ✅ Scroll to the section by ID
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/Apur0y" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/apu-roy-9192b9294/" },
  
    { icon: <FaFacebook />, link: "https://www.facebook.com/apuroy2785" },

  ];

  return (
    <div
      className="w-72 h-screen text-white flex flex-col justify-between items-center py-6"
      style={{
        background: "linear-gradient(to top, #5a1a1a, #1a1a1a)",
      }}
    >
      {/* Profile Picture */}
      <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-red-500">
        <img src="/new.jpg" alt="Profile" className="w-full object-cover" />
      </div>

      {/* Navigation Buttons */}
      <nav className="flex flex-col w-full mt-6">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`flex items-center gap-3 w-full px-6 py-3 text-lg transition-all duration-600 
              ${active === item.name ? "bg-red-500/20 text-red-500" : "hover:text-red-500"}`}
            onClick={() => handleButton(item.name, item.id)} 
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="divider"></div>

      {/* Social Icons */}
      <div className="flex gap-4 pb-5">
        {socialLinks.map((social, index) => (
          <a 
            key={index} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl transition-all mx-2 duration-300 hover:text-red-500 hover:scale-150 hover:mx-4"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
