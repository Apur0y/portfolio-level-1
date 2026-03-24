import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaGithub, FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../../../public/data/projects.json"



const Projects = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const visibleProjects = seeMore ? projects : projects.slice(0, 4);

  return (
    <div id="projects" className="py-12 px-4 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-xs font-medium text-neutral-400 tracking-widest uppercase">
          Projects
        </span>
        <button
          onClick={() => setSeeMore(!seeMore)}
          className="text-xs cursor-pointer text-neutral-400 border border-neutral-800 rounded-md px-3 py-1.5 hover:border-neutral-600 hover:text-neutral-200 transition-all duration-150"
        >
          {seeMore ? "Show less" : "View all"}
        </button>
      </div>

      {/* Grid — bordered table layout like Vercel */}
      <div className="border border-neutral-800 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => { setSelectedProject(project); setIsModalOpen(true); }}
            className="group relative p-6 cursor-pointer bg-black hover:bg-gradient-to-br hover:from-neutral-900 hover:via-[#3F101F] hover:to-[#3F101F] transition-colors  border-b border-r border-neutral-800 duration-300"
          >
            {/* Top row: thumbnail + arrow */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex gap-3 items-center">

                <div className="w-9 h-9 rounded-lg border border-neutral-800 overflow-hidden bg-neutral-900">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                  <h1 className="text-rose-700 font-bold text-xl">{project.title || 'back'}</h1>
              </div>
              <span className="text-neutral-600 text-sm md:text-md opacity-0 group-hover:opacity-100 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200">
                ↗
              </span>
            </div>

            {/* Name + description */}
            <p className="text-sm font-medium text-neutral-100 mb-1.5">
              {project.name}
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-5">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project?.stack.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-neutral-500 border border-neutral-800 rounded px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="text-[11px] text-neutral-500 border border-neutral-800 rounded px-2 py-0.5">
                  +{project.stack.length - 3}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.96, opacity: 0, y: 8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-neutral-950 border border-neutral-800 rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
            >
              {/* Modal header */}
              <div className="flex items-start justify-between p-6 border-b border-neutral-800">
                <div>
                  <h2 className="text-base font-medium text-neutral-100">
                    {selectedProject.name}
                  </h2>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-neutral-500 hover:text-neutral-300 border border-neutral-800 rounded-md w-7 h-7 flex items-center justify-center text-sm transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Preview image */}
              <img
                src={selectedProject.images[0]}
                alt={selectedProject.name}
                className="w-full h-48 object-cover border-b border-neutral-800"
              />

              {/* Body */}
              <div className="p-6">
                {/* Stack pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs text-neutral-600 mr-1">Stack</span>
                  {selectedProject.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-neutral-400 border border-neutral-800 rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-600 mb-3">
                  Challenges
                </p>
                <ul className="mb-6 space-y-0">
                  {selectedProject.challenges.map((c, i) => (
                    <li
                      key={i}
                      className="text-sm text-neutral-500 py-2.5 border-b border-neutral-900 flex gap-3"
                    >
                      <span className="text-neutral-700">–</span> {c}
                    </li>
                  ))}
                </ul>

                <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-600 mb-3">
                  Improvements
                </p>
                <ul className="space-y-0">
                  {selectedProject.improvements.map((imp, i) => (
                    <li
                      key={i}
                      className="text-sm text-neutral-500 py-2.5 border-b border-neutral-900 flex gap-3"
                    >
                      <span className="text-neutral-700">–</span> {imp}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="flex gap-2 p-4 border-t border-neutral-800">
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                  <button className="text-xs font-medium bg-white text-black rounded-md px-4 py-2 hover:opacity-85 transition-opacity flex items-center gap-1.5">
                    View project ↗
                  </button>
                </a>
                <a href={selectedProject.githubClient} target="_blank" rel="noopener noreferrer">
                  <button className="text-xs text-neutral-400 border border-neutral-800 rounded-md px-4 py-2 hover:border-neutral-600 hover:text-neutral-200 transition-all flex items-center gap-1.5">
                    GitHub
                  </button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Projects;
