import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Edu Quest",
    description: "ReactJS-Based Web Application | January,2025 | Live Site Integrated Firebase for authentication and JWT for secure user access. Utilized MongoDB for efficient CRUD operations.Built a dynamic, fully responsive online education platform with ReactJS and React Router.",
    liveLink: "https://edu-quest-aa2b3.web.app/",
    images: ["/e1.png", "/e2.png", "/e3.png"],
  },
  {
    id: 2,
    name: "Chill Gamer",
    description: " A dynamic game review platform where gamers can post, explore, and engage with game reviews. The website enables interactive content sharing with seamless navigation and user authentication.",
    liveLink: "https://aquamarine-custard-8f7ba5.netlify.app/",
    images: ["/m5.png", "/m6.png", "/m7.png", "/m8.png"],
  },
  {
    id: 3,
    name: "Volunteer Port",
    description: "A web platform for users to join and post volunteering opportunities. The site features secure authentication, role-based access, and an interactive UI for a seamless user experience.",
    liveLink: "https://volunteer-port.web.app/",
    images: ["/vol1.jpg", "/vol2.jpg", "/vol3.jpg", "/vol4.jpg"],
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects[0].images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="projects">
      <h1 className="text-2xl text-center my-7 border-b-2 pb-6 md:text-5xl font-semibold">Top Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="mb-20">
          <h1 className="w-10/12 mx-auto text-4xl font-extrabold mb-4">{project.id}. {project.name}</h1>
          <div className="relative mx-auto w-10/12 h-[500px] rounded-lg shadow-lg overflow-hidden group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 brightness-50 group-hover:blur-sm group-hover:brightness-40"
              style={{ backgroundImage: `url(${project.images[currentIndex]})` }}
            ></div>

            {/* Buttons */}
            <div className="absolute inset-0 flex justify-center items-center  transition-opacity duration-500">
            <div className="flex flex-col text-center bg-neutral-700/30 rounded-lg p-5">
            <h1 className="text-4xl font-bold mb-2 bg-red-600 rounded-lg py-2 px-4 text-white">{project.name}</h1>
                <p className="text-sm">{project.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
                <div className="flex flex-row gap-4 mx-auto mt-4">
                  <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition-all">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Preview
                    </a>{" "}
                    <FaArrowRight className="ml-2" />
                  </button>
                  <button
                    className="px-4 py-2 bg-white text-black rounded-md shadow hover:bg-gray-300 transition-all"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-10/12 max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-black">{selectedProject.name}</h2>
            <p className="mb-4 text-black">{selectedProject.description}</p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition-all"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
