import React from 'react'

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "⚛️", level: "Advanced" },
      { name: "TypeScript", icon: "📘", level: "Advanced" },
      { name: "Tailwind CSS", icon: "🎨", level: "Advanced" },
      { name: "Next.js", icon: "▲", level: "Intermediate" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "🟢", level: "Advanced" },
      { name: "Express.js", icon: "⚡", level: "Advanced" },
      { name: "MongoDB", icon: "🍃", level: "Intermediate" }

    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "📚", level: "Advanced" },
      { name: "Docker", icon: "🐳", level: "Intermediate" },
      { name: "Supabase", icon: "🐉", level: "Advanced" }
    ]
  }
]

const SkillCard = ({ name, icon, level }) => (
  <div 
    className="group relative bg-background-lighter p-4 rounded-lg border border-secondary/10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
    data-aos="fade-up"
  >
    <div className="flex items-center space-x-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="text-text-primary font-medium">{name}</h4>
        <p className="text-sm text-text-secondary">{level}</p>
      </div>
    </div>
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
  </div>
)

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary mb-12" data-aos="fade-up">
          Skills & Expertise
        </h2>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className="space-y-6"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-xl font-semibold text-text-accent">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-xl font-semibold text-text-accent mb-8">
            Other Technologies
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "GraphQL",
              "Redux",
              "Material UI",
              "Figma",
              "Supabase",
              "REST APIs",
              "UI/UX Design"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-background-lighter rounded-full text-sm text-text-secondary border border-secondary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills