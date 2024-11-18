import React from "react";
// import ItemLayout from "./ItemLayout";
import TechStack from "./ItemLayout";
import Link from "next/link";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiFillGithub,
} from "react-icons/ai";

const AboutDetails = () => {
  return (
    <section className="w-full m-8">
      <div className="flex space-x-6 w-full">
        {/* left part */}
        <div className="flex flex-col space-y-5 w-1/4">
          <div className="mb-12">
            <img
              src="/profile.jpg" // Replace with the path to your profile photo
              alt="Profile photo"
              className="ml-10 w-72 h-72 rounded-full border-4 border-yellow-400 hover:border-blue-500 object-cover shadow-lg"
            />
          </div>
          <div className="border-2 border-yellow-400 hover:border-blue-500 p-3 rounded-md">
            <h1 className="text-2xl">Let's connect with:</h1>
            <br />
            <div>
              <div className="items-center space-y-2">
                <Link href="https://www.youtube.com/" className="flex">
                  <AiOutlineMail className="text-4xl text-blue-600" />
                  <p className="text-xl ml-3 hover:text-cyan-400">
                    viswajithviswa715@gmail.com
                  </p>
                </Link>
                <Link href="https://www.youtube.com/" className="flex">
                  <AiOutlinePhone className="text-4xl text-green-600" />
                  <p className="text-xl ml-3 hover:text-cyan-400">
                    +91 9072906576
                  </p>
                </Link>
                <Link href="https://www.youtube.com/" className="flex">
                  <AiFillYoutube className="text-4xl text-red-600" />
                  <p className="text-xl ml-3 mt-2 hover:text-cyan-400">
                    Viswajith_Viswa03
                  </p>
                </Link>
                <Link href="https://www.linkedin.com/" className="flex">
                  <AiFillLinkedin className="text-4xl text-blue-400" />
                  <p className="text-xl ml-3 mt-2 hover:text-cyan-400">
                    VISWAJITH V P
                  </p>
                </Link>
                <Link href="https://www.instagram.com/" className="flex">
                  <AiFillInstagram className="text-4xl text-pink-600" />
                  <p className="text-xl ml-3 mt-2 hover:text-cyan-400">
                    viswajith_viswa03
                  </p>
                </Link>
                <Link href="https://www.github.com/" className="flex">
                  <AiFillGithub className="text-4xl text-slate-50" />
                  <p className="text-xl ml-3 mt-2 hover:text-cyan-400">
                    viswajith2003
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="flex flex-1 space-x-4">
          <div className="flex flex-col space-y-4 w-2/3">
            <div className="border-2 border-yellow-400 hover:border-blue-500 p-3 rounded-md h-1/3">
              <h2 className="mb-2 font-bold text-2xl">README :</h2>
              <p className="text-slate-400 font-light text-lg">
                I'm a self-taught full stack developer and highly passionate
                about the tech field. I'm constantly trying to expand my skills
                & stay up to date with upcoming and latest technologies.
                Recently I'm trying to enhance my network and enjoy
                collaboration work.
              </p>
            </div>
            <div className="border-2 border-yellow-400 hover:border-blue-500 p-6 rounded-md h-full ">
              <h2 className="mb-2 font-bold text-2xl">Tech Skills</h2>
              {[
                { skill: "Next.js", level: "70%" },
                { skill: "React.js", level: "85%" },
                { skill: "Tailwind CSS", level: "90%" },
                { skill: "Node.js", level: "30%" },
                { skill: "SQL", level: "60%" },
                { skill: "MongoDB", level: "40%" },
                { skill: "React Native", level: "40%" },
              ].map(({ skill, level }) => (
                <div className="my-8" key={skill}>
                  <h1 className="text-2xl md:text-[18px] uppercase text-cyan-400 font-extrabold animate-pulse mt-6 my-2">
                    {skill}
                  </h1>
                  <div className="bg-cyan-200/20 h-4 rounded-full">
                    <div
                      className="bg-cyan-400 h-full text-xs flex justify-center items-center text-black font-bold rounded-full"
                      style={{ width: level }}
                    >
                      {level}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-2 border-yellow-400 hover:border-blue-500 p-6 rounded-md w-1/3">
            <h2 className="mb-2 font-bold text-2xl">Education</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-12">
              {[
                {
                  title: "B-Tech in Computer Science",
                  time: "2022 - 2025",
                  description:
                    "Pursuing at Government Engineering College, Sreekrishnapuram, Palakkad.",
                },
                {
                  title: "Diploma in Computer Science",
                  time: "2020 - 2022",
                  description:
                    "Completed at AKNM Polytechnic College, Thirurangadi.",
                },
                {
                  title: "Plus Two in Computer Science",
                  time: "2018 - 2020",
                  description: "Completed at VHSE Chelari.",
                },
                {
                  title: "SSLC",
                  time: "2018",
                  description: "Completed at CBHSS Vallikkunnu.",
                },
              ].map(({ title, time, description }, index) => (
                <li
                  key={index}
                  className="mb-10 ms-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {time}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="border-2 border-yellow-400 hover:border-blue-500 p-3 rounded-md w-full mt-8 pb-12">
        <TechStack />
      </div> 
      
    </section>
  );
};

export default AboutDetails;
