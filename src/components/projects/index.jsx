"use client";
import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function ProjectList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showMore, setShowMore] = useState(false);
  const projectData = [
    {
      id: 1,
      title: "project heading 1",
      description: "short description",
      image: "project.jpg",
      categories: ["React.js"],
    },
    {
      id: 2,
      title: "project heading 2",
      description: "short description",
      image: "project.jpg",
      categories: ["Next.js"],
    },
    {
      id: 3,
      title: "project heading 3",
      description: "short description",
      image: "project.jpg",
      categories: ["React-Native"],
    },
    {
      id: 4,
      title: "project heading 4",
      description: "short description",
      image: "project.jpg",
      categories: ["React.js"],
    },
    {
      id: 5,
      title: "project heading 5",
      description: "short description",
      image: "project.jpg",
      categories: ["Next.js"],
    },
    {
      id: 6,
      title: "project heading 6",
      description: "short description",
      image: "project.jpg",
      categories: ["React.js", "Next.js"],
    },
    {
      id: 7,
      title: "project heading 7",
      description: "short description",
      image: "project.jpg",
      categories: ["React.js", "Next.js"],
      showMore: true,
    },
    {
      id: 8,
      title: "project heading 8",
      description: "short description",
      image: "project.jpg",
      categories: ["React.js", "Next.js"],
      showMore: true,
    },
    {
      id: 9,
      title: "project heading 9",
      description: "short description",
      image: "project.jpg",
      categories: ["React.js", "Next.js"],
      showMore: true,
    },
  ];

  const filteredProjects = projectData
    .filter((project) =>
      activeCategory === "All"
        ? true
        : project.categories.includes(activeCategory)
    )
    .filter((project) =>
      searchTerm.trim() === ""
        ? true
        : project.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((project) => (showMore ? true : !project.showMore));

  const hoverAnimation = {
    whileHover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
      },
    },
    whileTap: {
      scale: 0.95,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full border-[1px] border-white rounded-md h-auto p-8">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap space-x-2">
          {["All", "React.js", "Next.js", "React-Native"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full bg-transparent px-4 py-2 hover:border-white border-[1px] border-white text-white focus:outline-none ${
                activeCategory === category ? "bg-blue-700" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="hidden sm:flex sm:w-1/2 items-center justify-end space-x-2">
          <div className="rounded-full w-full h-full bg-transparent px-4 py-2 hover:border-white border-[1px] border-white text-white flex items-center justify-between">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full bg-transparent"
            />
            <RiSearchLine className="text-xl" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="card p-4 rounded-md space-y-3 border-[1px] border-yellow-400 bg-gray-800"
                variants={hoverAnimation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h1 className="text-3xl font-bold">{project.title}</h1>
                <p className="text-slate-400">{project.description}</p>
                <div className="w-full border-[1px] border-white h-44 rounded-md">
                  <img
                    src={project.image}
                    alt="project front page image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between">
                  <button className="border-[1px] p-2 rounded-full border-white text-white">
                    Live view
                  </button>
                  <button className="border-[1px] p-2 rounded-full border-white text-white">
                    View Source code
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center text-2xl font-bold text-white">
              No results found
            </div>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border-[1px] p-2 rounded-full text-white bg-transparent"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  );
}

