import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaGithub, FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
const projects = [
  {
    id: 5,
    name: "Job Searching and Employment Platform",
    description:
      "Career Path is a job searching platform developed as a team project under my leadership (July 2025). The platform provides seamless job search functionality and features a subscription-based payment system integrated with Stripe. It includes a comprehensive dashboard for both Admins and Employers, offering full control over jobs and users. Built with Next.js, TypeScript, Redux RTK Query, Tailwind, Zod, and Jspdf, the project ensures strong type safety, efficient state management, and a modern, responsive UI. API development and testing were managed with Postman, while the client and server sides were structured to support scalability and secure operations.",
    liveLink: "https://career-path-pearl.vercel.app/",
    images: ["/c1.png","/c3.png", "/c2.png", "/c5.png", "/c4.png"],
    stack:
      "Next.js, TypeScript, Redux RTK Query,Stripe, Jspdf, Zod, Tailwind, Postman, JWT",
    // description: "Edu Quest is a React-based online teaching platform...",

    githubClient: "https://github.com/Apur0y/career-path-frontend",
    challenges: [
      "For the Resume , need to get the data from different form, that was tough.",
      "Implementing subscription based payment system using Stripe.",
      "The searching funtionality is a bit challenging, but eventually done it.",
    ],
    improvements: [
      "Adding real-time chat functionality between job seekers and employers.",
      "Implementing resume builder for job seekers.",
      "Searching functionality can be improved more.",
    ],
  },
  {
    id: 4,
    name: "Ticket Booking Platform for Bus, Movies & Events",
    description:
      "Edu Quest  Online Teaching Platform Main technology stack used: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, JWT, AxiosBrief description:Edu Quest is a React-based online teaching platform that facilitates learning by connecting students and tutors. It provides distinct roles for students, tutors, and admins, ensuring an interactive and secure learning experience.Live project link:Edu Quest Live SiteGitHub repository link (only client):Edu Quest Client RepositoryChallenges faced while developing the project:Implementing Firebase authentication securely while managing JWT-based authorization.Ensuring smooth role-based access control for students, tutors, and admins.Optimizing database queries for efficient CRUD operations.Potential improvements and future plans for the project:Adding real-time chat functionality between students and tutors.Implementing a payment gateway for premium courses.Enhancing UI/UX with more interactive components.",
    liveLink: "https://edu-quest-aa2b3.web.app/",
    images: ["/t3.png", "/t2.png", "/t1.png"],
    stack:
      "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, JWT, Axios",
    // description: "Edu Quest is a React-based online teaching platform...",

    githubClient: "https://github.com/Apur0y/edu-quest-client-side",
    challenges: [
      "Implementing Firebase authentication securely while managing JWT-based authorization.",
      "Ensuring smooth role-based access control for students, tutors, and admins.",
      "Optimizing database queries for efficient CRUD operations.",
    ],
    improvements: [
      "Adding real-time chat functionality between students and tutors.",
      "Implementing a payment gateway for premium courses.",
      "Enhancing UI/UX with more interactive components.",
    ],
  },
  {
    id: 1,
    name: "Education Platform for Students & Tutors",
    description:
      "Edu Quest  Online Teaching Platform Main technology stack used: React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, JWT, AxiosBrief description:Edu Quest is a React-based online teaching platform that facilitates learning by connecting students and tutors. It provides distinct roles for students, tutors, and admins, ensuring an interactive and secure learning experience.Live project link:Edu Quest Live SiteGitHub repository link (only client):Edu Quest Client RepositoryChallenges faced while developing the project:Implementing Firebase authentication securely while managing JWT-based authorization.Ensuring smooth role-based access control for students, tutors, and admins.Optimizing database queries for efficient CRUD operations.Potential improvements and future plans for the project:Adding real-time chat functionality between students and tutors.Implementing a payment gateway for premium courses.Enhancing UI/UX with more interactive components.",
    liveLink: "https://edu-quest-aa2b3.web.app/",
    images: ["/e3.png", "/e2.png", "/e1.png"],
    stack:
      "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, JWT, Axios",
    // description: "Edu Quest is a React-based online teaching platform...",

    githubClient: "https://github.com/Apur0y/edu-quest-client-side",
    challenges: [
      "Implementing Firebase authentication securely while managing JWT-based authorization.",
      "Ensuring smooth role-based access control for students, tutors, and admins.",
      "Optimizing database queries for efficient CRUD operations.",
    ],
    improvements: [
      "Adding real-time chat functionality between students and tutors.",
      "Implementing a payment gateway for premium courses.",
      "Enhancing UI/UX with more interactive components.",
    ],
  },
  {
    id: 2,
    name: "Explore Trending Game and Review Platform",
    // description: " A dynamic game review platform where gamers can post, explore, and engage with game reviews. The website enables interactive content sharing with seamless navigation and user authentication.",
    liveLink: "https://aquamarine-custard-8f7ba5.netlify.app/",
    images: ["/m5.png", "/m6.png", "/m7.png", "/m8.png"],
    stack:
      "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, JWT, Axios",
    description:
      "Game Critique is a web application where gamers can post, explore, and discuss game reviews. It allows users to interact with reviews dynamically through a REST API-based system.",
    liveLink: "https://aquamarine-custard-8f7ba5.netlify.app/",
    githubClient: "https://github.com/Apur0y/game-critique-client-side",
    challenges: [
      "Managing and displaying user-generated content dynamically.",
      "Implementing a scalable data structure for storing and retrieving game reviews efficiently.",
      "Handling authentication for user-generated reviews while ensuring data integrity.",
    ],
    improvements: [
      "Adding a rating system with upvotes/downvotes on reviews.",
      "Implementing real-time notifications for new reviews and comments.",
      "Enhancing search and filtering options for better content discovery.",
    ],
  },
  {
    id: 3,
    name: "Join Volunteer Opportunities Platform",
    // description: "A web platform for users to join and post volunteering opportunities. The site features secure authentication, role-based access, and an interactive UI for a seamless user experience.",
    liveLink: "https://volunteer-port.web.app/",
    images: ["/vol1.jpg", "/vol2.jpg", "/vol3.jpg", "/vol4.jpg"],
    stack:
      "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, JWT, Axios",
    description:
      "Volunteer Port is a platform where users can find and post volunteer opportunities. It provides secure authentication and a seamless experience for those looking to engage in social service activities.",
    liveLink: "https://volunteer-port.web.app/",
    githubClient: "https://github.com/Apur0y/volunteer-port-client-site",
    challenges: [
      "Ensuring secure authentication and access control for volunteer posts.",
      "Structuring a database to manage volunteer events efficiently.",
      "Designing a UI that enhances user engagement and interaction.",
    ],
    improvements: [
      "Adding a real-time event calendar for tracking volunteer activities.",
      "Implementing social media sharing features to boost engagement.",
      "Enhancing user profiles with badges and participation history.",
    ],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log("Outside click detected");
        setIsModalOpen(false);
        setSelectedProject(null); // optional if you want to reset project too
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % projects[0].images.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="projects">
      <h1 className="text-2xl  text-[#FF014F] text-center my-7 border-b-2 pb-6 md:text-3xl font-semibold">
        Top Projects
      </h1>

      <motion.div></motion.div>

      <div className="grid grid-cols-1 w-10/12 mx-auto lg:grid-cols-2 gap-5">
        {(seeMore ? projects : projects.slice(0, 4)).map((project, index) => (
          <motion.div
            key={project.id}
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={() => {
              setSelectedProject(project);
              setIsModalOpen(true);
            }}
          >
            <div className="flex cursor-pointer justify-between mx-auto max-w-md h-full rounded-md shadow-lg overflow-hidden group bg-gradient-to-b from-[#3F101F] via-neutral-950 to-black p-5 border border-[#3F101F]">
              {/* Background Image */}
              <div className="bg-cover bg-center transition-all group duration-500  rounded-md overflow-hidden flex flex-col justify-between">
                <img
                  src={project.images[0]}
                  alt=""
                  className="h-1/2 min-h-14  group-hover:scale-110 transition-all rounded-md duration-300 object-cover"
                />
                {/* <div className="flex text-[#FF014F] justify-between mt-5 mx-3 font-semibold ">
                  <button>Live</button>
                  <button>Details</button>
                </div> */}
                <div className="h-1/2 ">
                  <h1 className=" group-hover:text-[#FF014F] transition-all duration-300 text-2xl pt-5 font-semibold mb-4">
                    {project.name}
                  </h1>
                  {/* <p className="text-sm w-10/12 mx-auto">
                    {project.description.split(" ").slice(0, 10).join(" ") +
                      "..."}
                  </p> */}
                  {/* <div className="flex flex-row justify-center gap-4 w-11/12 mx-auto mt-4">
                    <button className="flex cursor-pointer items-center px-4 py-2 bg-[#FF014F] text-white rounded-md shadow hover:bg-[#ff014dcd] transition-all">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Preview
                      </a>
                      <FaArrowRight className="ml-2" />
                    </button>
                    <button
                      className="px-4 py-2 bg-white text-black cursor-pointer rounded-md shadow hover:bg-gray-300 transition-all duration-100"
                      onClick={() => setSelectedProject(project)}
                    >
                      Details
                    </button>
                  </div> */}
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                    className="bg-[#3F101F] hover:bg-[#FF014F] transition-all duration-300 px-4 py-1 rounded-full flex items-center cursor-pointer"
                  >
                    Details
                    <MdOutlineArrowOutward />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
              
      {/* Modal */}
      <h1 onClick={()=>setSeeMore(!seeMore)} className="text-md cursor-pointer  text-[#FF014F]/0 hover:text-[#FF014F]  text-center  pb-12 md:text-xl font-semibold">
        {!seeMore?"See More": "See Less" }
      </h1>

      <div>
        {/** Wrap the modal inside AnimatePresence to enable exit animations */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <div className="fixed inset-0 z-50 md:left-72 flex items-center justify-center bg-neutral-900/50 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.5, ease: [0.1, 0.5, 0.1, 1] }}
                ref={modalRef}
                className="bg-black/80 backdrop-blur-2xl relative  rounded-lg p-6  w-11/12 shadow-xl max-h-[80vh] overflow-y-auto"
              >
                <div className="flex gap-4 mb-9">
                  <div className="flex  flex-col justify-center">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                      <h2 className="text-2xl md:text-4xl font-bold  ">
                        {selectedProject.name}
                      </h2>
                    
                    </div>
                    <p className="mb-2 ">
                      <strong>Main Technology Stack:</strong>{" "}
                      {selectedProject.stack}
                    </p>

                
                    <div className="flex justify-center gap-7 mt-6">
                      

                      <button className="flex bg-[#ff014dcd]/40 px-3 py-2 cursor-pointer items-center w-fit  text-white rounded-md shadow hover:bg-[#ff014dcd] transition-all">
                      <FaGithub  className="ml-0.5 mr-1" />
                        <a
                          href={selectedProject.githubClient}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 "
                        >
                          Github
                        </a>
                      </button>
                      

                      <button className="flex bg-[#ff014dcd]/40 px-3 py-2 cursor-pointer items-center w-fit  text-white rounded-md shadow hover:bg-[#ff014dcd] transition-all">
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 "
                        >
                          View Project
                        </a>
                        <FaRegArrowAltCircleRight className="ml-0.5 mr-1 mt-0.5" />
                      </button>
                      
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#3F101F] via-neutral-950 to-[#3F101F] md:py-11 md:px-11 rounded-lg">
                    
                    <img
                      src={selectedProject?.images[currentIndex]}
                      alt=""
                      className=" h-[300px]  min-h-14 transition-all rounded-md duration-300 object-cover"
                    />
                  </div>
                </div>

                {/* Other Details  */}
                <div className="border-t pt-7">
                  <h1 className="text-2xl font-semibold mb-2">Description :</h1>
                  <p className="mb-4 ">{selectedProject.description}</p>
                  <p className="mb-2 ">
                    <strong>Challenges Faced:</strong>
                  </p>
                  <ul className="list-disc list-inside mb-4 ">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>

                  <p className="mb-2 ">
                    <strong>Potential Improvements:</strong>
                  </p>
                  <ul className="list-disc list-inside mb-4 ">
                    {selectedProject.improvements.map((improvement, index) => (
                      <li key={index}>{improvement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <button
                    className="px-4 py-2 bg-neutral-700 text-white rounded-md shadow hover:bg-neutral-900 cursor-pointer transition-all"
                    onClick={() => {
                      setSelectedProject(null);
                      setIsModalOpen(false);
                    }}
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
