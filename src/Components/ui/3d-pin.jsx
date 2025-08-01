"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";

// Container Component
export const PinContainer = ({
  children,
  title,
  href,
  image,
  githubUrl,
  className,
  containerClassName,
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <a
      className={cn(
        "relative group/pin z-50 cursor-pointer w-full max-w-md", // ✅ ADDED WIDTH HERE
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
      target="_blank"
    >
      {/* 3D Tilt Container */}
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2 w-full max-w-md" // ✅ HERE TOO
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 top-1/2 w-full max-w-md p-4 flex flex-col gap-2 justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          {/* Image */}
          {image && (
            <img
              src={image}
              alt="project preview"
              className="w-full h-40 object-cover rounded-md border border-white/10"
            />
          )}

          {/* Children (e.g. description) */}
          <div className={cn("relative z-50 text-white w-full", className)}>
            {children}
          </div>

          {/* GitHub Button */}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="mt-2 flex items-center gap-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700 border border-white/10 px-3 py-1 rounded transition"
            >
              <FaGithub /> GitHub Repo
            </a>
          )}
        </div>
      </div>

      {/* Perspective Background Hover Effects */}
      <PinPerspective title={title} href={href} />
    </a>
  );
};

// Background & animated perspective lighting
export const PinPerspective = ({ title, href }) => {
  return (
    <motion.div className="pointer-events-none w-full max-w-md h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        {/* Title Button on Top */}
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target="_blank"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        {/* Animated Pulse Glow */}
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          ))}
        </div>

        {/* Beam Effects */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
