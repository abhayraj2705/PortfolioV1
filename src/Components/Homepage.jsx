import React from 'react'
import Lanyard from "./Lanyard/Lanyard"

export const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-background to-black text-text-primary">
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/5 via-transparent to-transparent" />

      {/* Subtle Glowing Orbs */}
      <div className="absolute top-20 left-20 w-56 h-56 bg-blue-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-400/10 rounded-full blur-2xl" />

      <div className="relative z-10 flex justify-around items-center min-h-screen">
        <div className="homepagesection px-9 space-y-8 max-w-2xl backdrop-blur-sm bg-black/30 rounded-xl p-8 border border-white/5">
          {/* Hero Section */}
          <div className="space-y-4">
            <h2 className="text-cyan-300 text-xl font-medium animate-slideFromLeft">
              Hi there 👋, I'm
            </h2>
            <h1 className="text-5xl font-bold text-white animate-slideFromLeft delay-100">
              Abhayraj B
            </h1>
            <p className="text-2xl text-gray-400 animate-slideFromLeft delay-200">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* About */}
          <p className="text-gray-300 leading-relaxed animate-slideFromLeft delay-300 bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10">
            I craft digital experiences with code and creativity. Specialized in
            building exceptional websites, applications, and everything in between.
          </p>

          {/* Tech Stack */}
          <div className="space-y-4 animate-slideFromLeft delay-400">
            <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-black/30 text-gray-300 border border-white/10 rounded-full text-sm hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 animate-slideFromLeft delay-500">
            <button className="px-6 py-3 bg-cyan-500/80 text-black rounded-lg hover:bg-cyan-400 transition-all hover:scale-105">
              View Projects
            </button>
            <button className="px-6 py-3 bg-black/30 text-white border border-white/10 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-105">
              Contact Me
            </button>
          </div>
        </div>

        {/* Lanyard */}
        <div className="lanyard px-6 m-3 backdrop-blur-sm bg-black/30 rounded-xl p-4 border border-white/5">
          <Lanyard />
        </div>
      </div>
    </div>
  )
}
