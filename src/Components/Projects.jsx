import React from "react";
import { PinContainer } from "../Components/ui/3d-pin.jsx"; // adjust path as needed
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Uniconnect",
    description: "A full-stack college event management platform built with the MERN stack.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/Uniconnect.png",
    github: "https://github.com/abhayraj2705/Uniconnect",
    live: "https://uniconnect-qs2s.onrender.com/",
  },
  {
    title: "GetmeAchai",
    description: "A developer support platform inspired by Buy Me a Coffee",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/Getmeachai.jfif",
    github: "https://github.com/abhayraj2705/GetmeAchai",
    live: "https://github.com/abhayraj2705/GetmeAchai",
  },
  {
    title: "FileManager",
    description: "A PLatform build for manging your personal files",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/Filemanager.png",
    github: "https://github.com/abhayraj2705/Filemanager",
    live: "https://filemanager-frontend-he7r.onrender.com/",


  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-white mb-12"
          data-aos="fade-up"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div data-aos="fade-up" data-aos-delay={index * 100} key={project.title}>
              <PinContainer
                title={project.title}
                href={project.live}
                githubUrl={project.github}
                image={project.image}
              >
                <p className="text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-zinc-800 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-blue-400 hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-1 text-blue-400 hover:underline"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
