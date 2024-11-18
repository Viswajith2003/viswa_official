import React from "react";
import { RiSearchLine } from "react-icons/ri";

export default function ProjectList() {
  const projectData = [
    {
      id: 1,
      title: "project heading",
      description: "short description",
      image: "project.jpg",
    },
    {
      id: 2,
      title: "project heading",
      description: "short description",
      image: "project.jpg",
    },
    {
      id: 3,
      title: "project heading",
      description: "short description",
      image: "project.jpg",
    },
    {
      id: 4,
      title: "project heading",
      description: "short description",
      image: "project.jpg",
    },
    {
      id: 5,
      title: "project heading",
      description: "short description",
      image: "project.jpg",
    },
    {
      id: 6,
      title: "project heading",
      description: "short description",
      image: "project.jpg",
    },
  ];

  return (
    <div className=" w-full border-[1px] border-white rounded-md h-auto p-8 ">
      <div className="flex space-x-2 justify-between">
        <div className="flex space-x-2">
          <div className="rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-300">
            <h1 className="text-black">All</h1>
          </div>
          <div className="rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-300">
            <h1 className="text-black">React.js</h1>
          </div>
          <div className="rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-300">
            <h1 className="text-black">Next.js</h1>
          </div>
          <div className="rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-300">
            <h1 className="text-black">React-Native</h1>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end space-x-2">
          <div className="rounded-full w-full h-full bg-gray-200 px-4 py-2 hover:bg-gray-300 text-black flex items-center justify-between">
            <span className="text-black">Search..</span>
            <RiSearchLine className="text-xl" aria-hidden="true" />
          </div>
        </div>
      </div>
      {/* project card session */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="card sm:col-span-1 bg-blue-950 p-4 rounded-md space-y-3 border-[1px]"
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
                <button className="border-[1px] p-2 rounded-full">
                  Live view
                </button>
                <button className="border-[1px] p-2 rounded-full">
                  View Source code
                </button>
              </div>
            </div>
          ))}

        </div>
        <div className="flex justify-center mt-8 ">
          <button className="border-[1px] p-2 rounded-full text-black bg-white">Show more</button>
        </div>
      </div>
    </div>
  );
}

