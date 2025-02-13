import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const projects = [
  {
    id: 1,
    name: "Edu Quest",
    description: "1. Edu Quest | Online Teaching Platform Main technology stack used: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, JWT, AxiosBrief description:Edu Quest is a React-based online teaching platform that facilitates learning by connecting students and tutors. It provides distinct roles for students, tutors, and admins, ensuring an interactive and secure learning experience.Live project link:Edu Quest Live SiteGitHub repository link (only client):Edu Quest Client RepositoryChallenges faced while developing the project:Implementing Firebase authentication securely while managing JWT-based authorization.Ensuring smooth role-based access control for students, tutors, and admins.Optimizing database queries for efficient CRUD operations.Potential improvements and future plans for the project:Adding real-time chat functionality between students and tutors.Implementing a payment gateway for premium courses.Enhancing UI/UX with more interactive components.",
    liveLink: "https://edu-quest-aa2b3.web.app/",
    images: ["/e1.png", "/e2.png", "/e3.png"],
    stack: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, JWT, Axios",
    // description: "Edu Quest is a React-based online teaching platform...",
  
    githubClient: "https://github.com/Apur0y/edu-quest-client-side",
    challenges: [
      "Implementing Firebase authentication securely while managing JWT-based authorization.",
      "Ensuring smooth role-based access control for students, tutors, and admins.",
      "Optimizing database queries for efficient CRUD operations."
    ],
    improvements: [
      "Adding real-time chat functionality between students and tutors.",
      "Implementing a payment gateway for premium courses.",
      "Enhancing UI/UX with more interactive components."
    ]
  },
  {
    id: 2,
    name: "Chill Gamer",
    // description: " A dynamic game review platform where gamers can post, explore, and engage with game reviews. The website enables interactive content sharing with seamless navigation and user authentication.",
    liveLink: "https://aquamarine-custard-8f7ba5.netlify.app/",
    images: ["/m5.png", "/m6.png", "/m7.png", "/m8.png"],
    stack: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, JWT, Axios",
    description: "Game Critique is a web application where gamers can post, explore, and discuss game reviews. It allows users to interact with reviews dynamically through a REST API-based system.",
    liveLink: "https://aquamarine-custard-8f7ba5.netlify.app/",
    githubClient: "https://github.com/Apur0y/game-critique-client-side",
    challenges: [
      "Managing and displaying user-generated content dynamically.",
      "Implementing a scalable data structure for storing and retrieving game reviews efficiently.",
      "Handling authentication for user-generated reviews while ensuring data integrity."
    ],
    improvements: [
      "Adding a rating system with upvotes/downvotes on reviews.",
      "Implementing real-time notifications for new reviews and comments.",
      "Enhancing search and filtering options for better content discovery."
    ]
  },
  {
    id: 3,
    name: "Volunteer Port",
    // description: "A web platform for users to join and post volunteering opportunities. The site features secure authentication, role-based access, and an interactive UI for a seamless user experience.",
    liveLink: "https://volunteer-port.web.app/",
    images: ["/vol1.jpg", "/vol2.jpg", "/vol3.jpg", "/vol4.jpg"],
    stack: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, JWT, Axios",
    description: "Volunteer Port is a platform where users can find and post volunteer opportunities. It provides secure authentication and a seamless experience for those looking to engage in social service activities.",
    liveLink: "https://volunteer-port.web.app/",
    githubClient: "https://github.com/Apur0y/volunteer-port-client-site",
    challenges: [
      "Ensuring secure authentication and access control for volunteer posts.",
      "Structuring a database to manage volunteer events efficiently.",
      "Designing a UI that enhances user engagement and interaction."
    ],
    improvements: [
      "Adding a real-time event calendar for tracking volunteer activities.",
      "Implementing social media sharing features to boost engagement.",
      "Enhancing user profiles with badges and participation history."
    ]
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
      <h1 className="text-2xl text-white text-center my-7 border-b-2 pb-6 md:text-5xl font-semibold">Top Projects</h1>
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
                    className="px-4 py-2 bg-white text-black rounded-md shadow hover:bg-gray-300 transition-all duration-100"
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


<div>


{/** Wrap the modal inside AnimatePresence to enable exit animations */}
<AnimatePresence>
  {selectedProject && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/50 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }} 
        animate={{ scale: 1, opacity: 1, y: 0 }} 
        exit={{ scale: 0.8, opacity: 0, y: 50 }} 
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} 
        className="bg-white rounded-lg p-6 w-64 md:w-full max-w-3xl shadow-xl max-h-[80vh] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-black">{selectedProject.name}</h2>
        <p className="mb-2 text-black"><strong>Main Technology Stack:</strong> {selectedProject.stack}</p>
        <p className="mb-4 text-black">{selectedProject.description}</p>

        <p className="mb-2 text-black"><strong>Live Project:</strong> 
          <a href={selectedProject.liveLink} className="text-blue-500" target="_blank"> View Site</a>
        </p>
        
        <p className="mb-4 text-black"><strong>GitHub Repository:</strong> 
          <a href={selectedProject.githubClient} className="text-blue-500" target="_blank"> Client</a>
        </p>

        <p className="mb-2 text-black"><strong>Challenges Faced:</strong></p>
        <ul className="list-disc list-inside mb-4 text-black">
          {selectedProject.challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>

        <p className="mb-2 text-black"><strong>Potential Improvements:</strong></p>
        <ul className="list-disc list-inside mb-4 text-black">
          {selectedProject.improvements.map((improvement, index) => (
            <li key={index}>{improvement}</li>
          ))}
        </ul>

        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition-all"
            onClick={() => setSelectedProject(null)}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  )}
</AnimatePresence>


</div>

    </div>
  );
};

export default Projects;
