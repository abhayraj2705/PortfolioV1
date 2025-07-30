import React from 'react'

const experiences = [
  {
    company: "HackoSquad",
    role: "Full Stack Developer Intern",
    period: "June 2025 - Present",
    description: [
      "Developing and maintaining web applications using React.js and Node.js",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Working with REST APIs and MongoDB database",
      "Collaborating with team members using Git and GitHub"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    companyUrl: "https://hackosquad.com"
  },
  {
    company: "Afame Technologies",
    role: "Software Developer Intern",
    period: "May 2025 - June 2025",
    description: [
      "Worked on building responsive user interfaces using React.js",
      "Integrated RESTful APIs and handled state management",
      "Participated in code reviews and team meetings",
      "Optimized application performance and loading times"
    ],
    tech: ["React", "JavaScript", "CSS", "Git", "REST APIs"],
    companyUrl: "https://afametech.com"
  }
]

const TimelineItem = ({ experience, isLast }) => (
  <div className="relative pl-10 pb-16">
    {/* Timeline line (subtle but glowing) */}
    {!isLast && (
      <div className="absolute left-[14px] top-6 h-full w-[2px] bg-cyan-500/40 shadow-[0_0_6px_rgba(34,211,238,0.4)]" />
    )}

    {/* Timeline dot (minimal glow) */}
    <div className="absolute left-0 top-4 h-6 w-6">
      <div className="h-full w-full rounded-full border-2 border-cyan-400 bg-black relative">
        <div className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
      </div>
    </div>

    {/* Experience Card */}
    <div 
      className="group rounded-xl border border-white/10 bg-[#0f0f0f] p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_18px_rgba(34,211,238,0.25)]"
      data-aos="fade-up"
    >
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <span className="text-sm font-medium text-white/50">
          {experience.period}
        </span>
        <h3 className="text-xl font-semibold text-white/90">
          {experience.role}
        </h3>
        <a 
          href={experience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {experience.company}
        </a>
      </div>

      {/* Description */}
      <ul className="mt-4 space-y-2">
        {experience.description.map((item, idx) => (
          <li 
            key={idx}
            className="flex items-start text-white/70"
          >
            <span className="mr-2 text-cyan-400">▹</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300 border border-cyan-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl font-bold text-cyan-300 mb-16 text-center"
          data-aos="fade-up"
        >
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, idx) => (
            <TimelineItem
              key={experience.company}
              experience={experience}
              isLast={idx === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
