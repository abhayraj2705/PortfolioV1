import React from 'react';
import { motion } from 'framer-motion';
import Lanyard from "./Lanyard/Lanyard";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" }
  })
};

export const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70 pointer-events-none" />

      {/* Subtle Glowing Orbs */}
      <div className="absolute top-20 left-20 w-56 h-56 bg-cyan-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-400/10 rounded-full blur-2xl" />

      <div className="relative z-10 flex flex-col lg:flex-row justify-around items-center min-h-screen px-8">
        {/* Text Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="homepagesection space-y-8 max-w-2xl backdrop-blur-sm bg-black/30 rounded-xl p-8 border border-white/10"
        >
          {/* Intro */}
          <motion.div variants={fadeInUp} custom={0.1}>
            <h2 className="text-cyan-400 text-xl font-medium">
              Hi Welcome To My Portfolio
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} custom={0.2}>
            <h1 className="text-5xl font-bold text-white">
              Abhayraj B
            </h1>
          </motion.div>

          <motion.div variants={fadeInUp} custom={0.3}>
            <p className="text-2xl text-gray-300">
              MERN STACK DEVELOPER
            </p>
          </motion.div>

          {/* About */}
          <motion.p
            variants={fadeInUp}
            custom={0.4}
            className="text-gray-300 leading-relaxed bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10"
          >
            I craft digital experiences with code and creativity. Specialized in
            building exceptional websites, applications, and everything in between.
          </motion.p>

          {/* Tech Stack */}
          <motion.div variants={fadeInUp} custom={0.5} className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {['⚛️ React', '🌳 Node.js', '📘 TypeScript', '🍃 MongoDB', '🎨 Tailwind', '📜 JavaScript'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                  className="px-4 py-2 bg-black/30 text-white border border-white/10 rounded-full text-sm hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Lanyard */}
        <motion.div
          variants={fadeInUp}
          custom={0.7}
          initial="hidden"
          animate="visible"
          className="lanyard mt-12 lg:mt-0 backdrop-blur-sm bg-black/30 rounded-xl p-4 border border-white/10"
        >
          <Lanyard />
        </motion.div>
      </div>
    </div>
  );
};
