"use client";
import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import StarField from "../../components/starfield/StarField";
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
    <section className="w-full p-4 md:p-8">
      <StarField />
      <div className="flex flex-col md:flex-row md:space-x-6 w-full">
        {/* Left part */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={clsx(
            "flex flex-col space-y-5 md:w-1/4",
            "border-[1px] border-yellow-400 hover:border-blue-500 p-5 rounded-md shadow-md shadow-blue-400"
          )}
        >
          <div className="flex justify-center mb-8">
            <img
              src="/profile.jpg"
              alt="Profile photo"
              className="w-36 h-36 md:w-72 md:h-72 rounded-full border-4 border-white shadow-lg shadow-blue-400 hover:border-blue-500 object-cover"
            />
          </div>
          <div className="mb-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold">
              Tech Enthusiast & Developer
            </h2>
            <p className="text-slate-400 font-light text-sm md:text-md">
              Excited about creating solutions and learning new technologies.
            </p>
          </div>
          <div className="border-[1px] border-yellow-400 shadow-blue-400 hover:border-blue-500 p-5 rounded-md">
            <h1 className="text-xl md:text-2xl font-bold">
              Let's connect with:
            </h1>
            <br />
            <div className="items-center space-y-3 animate-pulse">
              {[
                {
                  href: "mailto:viswajithviswa715@gmail.com",
                  icon: AiOutlineMail,
                  text: "viswajithviswa715@gmail.com",
                  color: "text-blue-300",
                },
                {
                  href: "tel:+919072906576",
                  icon: AiOutlinePhone,
                  text: "+91 9072906576",
                  color: "text-green-500",
                },
                {
                  href: "https://www.youtube.com/@viswajith-viswa03",
                  icon: AiFillYoutube,
                  text: "Viswajith_Viswa03",
                  color: "text-red-500",
                },
                {
                  href: "https://www.linkedin.com/in/viswajith-vp-b845a8242",
                  icon: AiFillLinkedin,
                  text: "VISWAJITH V P",
                  color: "text-sky-500",
                },
                {
                  href: "https://www.instagram.com/viswajith_viswa03",
                  icon: AiFillInstagram,
                  text: "viswajith_viswa03",
                  color: "text-pink-500",
                },
                {
                  href: "https://github.com/Viswajith2003",
                  icon: AiFillGithub,
                  text: "viswajith2003",
                  color: "text-white",
                },
              ].map(({ href, icon: Icon, text, color }, index) => (
                <Link href={href} className="flex items-center" key={index}>
                  <Icon className={color + " text-2xl md:text-3xl"} />
                  <p
                    className={
                      "text-sm md:text-xl ml-3 " +
                      color +
                      " hover:text-cyan-400"
                    }
                  >
                    {text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right part */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:space-x-4 flex-1 mt-6 md:mt-0"
        >
          <div className="flex flex-col space-y-4 md:w-2/3">
            <div className="border-[1px] border-yellow-400 shadow-md shadow-blue-400 hover:border-blue-500 p-5 rounded-md">
              <h2 className="mb-2 font-bold text-xl md:text-2xl">README :</h2>
              <p className="text-slate-400 font-light text-sm md:text-lg text-justify">
                I'm a self-taught full-stack developer passionate about tech.
                I’m constantly trying to expand my skills and stay updated with
                emerging technologies. Recently, I’m focused on collaboration
                and networking.
              </p>
            </div>
            <div className="border-[1px] border-yellow-400 shadow-md shadow-blue-400 hover:border-blue-500 p-5 rounded-md">
              <h2 className="mb-2 font-bold text-xl md:text-2xl">
                Tech Skills
              </h2>
              {[
                { skill: "Next.js", level: "70%" },
                { skill: "React.js", level: "85%" },
                { skill: "Tailwind CSS", level: "90%" },
                { skill: "Node.js", level: "30%" },
                { skill: "SQL", level: "60%" },
                { skill: "MongoDB", level: "40%" },
                { skill: "React Native", level: "40%" },
              ].map(({ skill, level }) => (
                <div className="my-4" key={skill}>
                  <h1 className="text-lg md:text-2xl uppercase text-cyan-400 font-extrabold animate-pulse my-2">
                    {skill}
                  </h1>
                  <div className="bg-cyan-200/20 h-3 md:h-4 rounded-full">
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
          <div className="border-[1px] border-yellow-400 shadow-lg shadow-blue-400 hover:border-blue-500 p-5 rounded-md md:w-1/3">
            <h2 className="mb-2 font-bold text-xl md:text-2xl">Education</h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-6 md:mt-12">
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
                <li key={index} className="mb-10 ml-6 animate-fade-in-up">
                  <span className="absolute w-4 h-4 bg-blue-100 rounded-full -start-3 ring-8 dark:ring-gray-900 ring-white animate-bounce dark:bg-green-500"></span>
                  <h3 className="text-sm md:text-lg font-semibold">{title}</h3>
                  <time className="block text-xs md:text-sm text-gray-400">
                    {time}
                  </time>
                  <p className="text-xs md:text-sm text-gray-500">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="border-[1px] border-yellow-400 shadow-lg shadow-green-200 hover:border-blue-500 p-3 rounded-md w-full mt-8 pb-12"
      >
        <TechStack />
      </motion.div>
    </section>
  );
};

export default AboutDetails;
