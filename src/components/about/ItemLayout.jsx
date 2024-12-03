"use client";
import React from "react";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaAws,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaNpm,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiMysql,
  SiJquery,
  SiTailwindcss,
  SiVite,
  SiVisualstudiocode,
  SiFigma,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { name: "jQuery", icon: SiJquery, color: "#0769AD" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Linux", icon: FaLinux, color: "#FCC624" },
  { name: "npm", icon: FaNpm, color: "#CB3837" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "VSCode", icon: SiVisualstudiocode, color: "#0078D7" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

export default function TechStack() {
  return (
    <div className="mt-2">
      <h2 className="text-2xl font-bold text-center mb-6">Tech Stack</h2>
      <div className="overflow-hidden">
        <div className="flex animate-scroll gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              {React.createElement(tech.icon, { size: 80, color: tech.color, key: index })}
              <p className="text-sm mt-1">{tech.name}</p>
            </div>
          ))}
          {techStack.map((tech, index) => (
            <div key={index + techStack.length} className="flex-shrink-0 text-center">
              {React.createElement(tech.icon, { size: 80, color: tech.color, key: index + techStack.length })}
              <p className="text-sm mt-1">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


