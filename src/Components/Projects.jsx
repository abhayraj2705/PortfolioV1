import React from "react";
import { PinContainer } from "@/components/ui/3d-pin"; // adjust path as needed
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/project1.jpg",
    github: "https://github.com/example/project1",
    live: "https://project1.live",
  },
  {
    title: "Project 2",
    description: "A beautiful portfolio website.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    image: "/project2.jpg",
    github: "https://github.com/example/project2",
    live: "https://project2.live",
  },
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
