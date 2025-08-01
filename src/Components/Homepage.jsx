import React from 'react'
import Lanyard from "./Lanyard/Lanyard"

export const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70 pointer-events-none" />

      {/* Subtle Glowing Orbs */}
      <div className="absolute top-20 left-20 w-56 h-56 bg-cyan-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-400/10 rounded-full blur-2xl" />

      <div className="relative z-10 flex flex-col lg:flex-row justify-around items-center min-h-screen px-8">
        {/* Text Section */}
        <div className="homepagesection space-y-8 max-w-2xl backdrop-blur-sm bg-black/30 rounded-xl p-8 border border-white/10 animate-fadeIn">
          <div className="space-y-4">
            <h2 className="text-cyan-400 text-xl font-medium animate-slideFromLeft delay-100">
              Hi Welcome To My Portfolio
            </h2>
            <h1 className="text-5xl font-bold text-white animate-slideFromLeft delay-200">
              Abhayraj B
            </h1>
            <p className="text-2xl text-gray-300 animate-slideFromLeft delay-300">
              MERN STACK DEVELOPER 
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10 animate-slideUp delay-400">
            I craft digital experiences with code and creativity. Specialized in
            building exceptional websites, applications, and everything in between.
          </p>

          {/* Tech Stack */}
          <div className="space-y-4 animate-slideUp delay-500">
            <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind','Javascript'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-black/30 text-white border border-white/10 rounded-full text-sm hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
         
        </div>

        {/* Lanyard Component */}
        <div className="lanyard mt-12 lg:mt-0 backdrop-blur-sm bg-black/30 rounded-xl p-4 border border-white/10 animate-slideUp delay-700">
          <Lanyard />
        </div>
      </div>
    </div>
  )
}
