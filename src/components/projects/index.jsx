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
      title: "CSE-Dept website",
      description:
        "A website for the Computer Science and Engineering department at GECPKD.",
      image: "./project/cseWeb.png",
      categories: ["Next.js"],
      liveLink: "https://csegecskp.vercel.app/",
      sourceCode: "https://github.com/CSEGECPKD/cse_dept_site",
    },
    {
      id: 2,
      title: "Alumni Website",
      description:
        "A website for the alumni for making interation between the alumni and the students.",
      image: "./project/alumni.png",
      categories: ["Next.js"],
      liveLink: "https://alumniweb-viswajith2003s-projects.vercel.app/",
      sourceCode: "https://github.com/Viswajith2003/Alumni_Website.git",
    },
    {
      id: 3,
      title: "Blogging Website",
      description:
        "Web technologies include tools and techniques for developing websites and web applications.",
      image: "./project/blog.png",
      categories: ["React.js"],
      liveLink: "https://blog-website-xi-blush.vercel.app/",
      sourceCode: "https://github.com/Viswajith2003/Devscript-blog-web.git",
    },
    {
      id: 4,
      title: "Travel Website",
      description: "A website to book and explore travel destinations.",
      image: "./project/travel.png",
      categories: ["React.js"],
      liveLink: "https://travel-web-ten-coral.vercel.app/",
      sourceCode: "https://github.com/Viswajith2003/Travel_web.git",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A platform to manage gym schedules and track workouts.",
      image: "./project/gym.jpg",
      categories: ["Next.js"],
      liveLink: "https://fitness-web-tau.vercel.app/",
      sourceCode: "https://github.com/Viswajith2003/fitness_web.git",
    },
    {
      id: 6,
      title: "Netflix Clone",
      description: "A clone of Netflix to stream videos online.",
      image: "./project/netflix.jpg",
      categories: ["React.js"],
      liveLink: "https://netflix-clone-1.vercel.app/",
      sourceCode: "https://github.com/Viswajith2003/Netflix-UI-clone.git",
    },

    {
      id: 7,
      title: "Weather App",
      description: "A weather application to check current weather conditions.",
      image: "./project/weather.png",
      categories: ["React.js"],
      liveLink: "https://weather-app-two-gilt-56.vercel.app/",
      sourceCode: "https://github.com/Viswajith2003/WeatherApp.git",
      // showMore: true,
    },
    {
      id: 8,
      title: "QUOTE APP",
      description: "A simple app to generate random quotes.",
      image: "./project/Quotes.png",
      categories: ["React.js"],
      liveLink: "https://quote-app-1.vercel.app/",
      sourceCode: "https://github.com/Viswajith2003/GET_QUOTE_APP.git",
      // showMore: true,
    },
    {
      id: 9,
      title: "Food Delivery App",
      description:
        "A food delivery application where users can order food from various restaurants.",
      image: "./project/food.png",
      categories: ["Next.js"],
      liveLink: "https://food-delivery-app-1.vercel.app/",
      sourceCode: "https://github.com/Viswajith-VP/Food-Delivery-App",
      showMore: true,
    },
    {
      id: 10,
      title: "Music App",
      description: "A simple music player app.",
      image: "./project/music.png",
      categories: ["React-Native"],
      liveLink: "https://expo.dev/@viswajithvp/music-app",
      sourceCode: "https://github.com/Viswajith-VP/Music-App",
      // showMore: true,
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
    <div className="w-full border-[1px] border-[#1e6c12] rounded-md h-auto p-8">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap space-x-2">
          {["All", "React.js", "Next.js", "React-Native"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 hover:border-[#32ff12] border-[1px] border-white text-white  ${
                activeCategory === category
                  ? "bg-[#32ff12] text-[#051427] font-bold"
                  : ""
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 ">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="card p-4 rounded-md space-y-3 border-[1px] border-[#1e6c12] bg-[#040d26]"
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
                <div className="flex justify-between mt-10">
                  <button
                    onClick={() => window.open(project.liveLink, "_blank")}
                    className="border-[1px] p-y-3 w-1/4 h-[45px] rounded-xl border-[#32ff12] hover:bg-[#c8ff12] hover:text-black font-bold"
                  >
                    Live view
                  </button>
                  <button
                    onClick={() => window.open(project.sourceCode, "_blank")}
                    className="border-[1px] w-2/5 h-[45px] p-y-3 rounded-xl border-[#32ff12] hover:bg-[#32ff12] hover:text-black font-bold"
                  >
                    Source code View
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
            className="border-[#32ff12] border-[1px] p-y-3 w-[140px] h-[45px] rounded-full text-white bg-transparent"
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </div>
  );
}
