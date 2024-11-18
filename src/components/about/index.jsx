import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

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
            <h1>Contacts:</h1>
            <br />
            <div className="gap-3 flex">
              <i>Mail</i>
              <p>viswajithviswa715@gmail.com</p>
            </div>
            <div className="gap-3 flex">
              <i>Phone</i>
              <p>+91 9072906576</p>
            </div>
          </div>
          <div className="border-2 border-yellow-400 hover:border-blue-500 p-3 rounded-md">
            <h1>Let's connect with social:</h1>
            <br />
            <div className="gap-3 flex">
              <i>Youtube</i>
              <i>Instagram</i>
              <i>LinkedIn</i>
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="flex flex-1 space-x-4">
          <div className="flex flex-col space-y-4 w-2/3">
            <div className="border-2 border-yellow-400 hover:border-blue-500 p-3 rounded-md h-1/3">
              <h2 className="mb-2 font-bold">README :</h2>
              <p className="text-slate-400 font-light">
                I'm a self-taught full stack developer and highly passionate
                about the tech field. I'm constantly trying to expand my skills
                & stay up to date with upcoming and latest technologies.
                Recently I'm trying to enhance my network and enjoy
                collaboration work.
              </p>
            </div>
            <div className="border-2 border-yellow-400 hover:border-blue-500 p-6 rounded-md h-full ">
              <h2 className="mb-2 font-bold">Tech Skills</h2>
              <div className="my-8">
                <h1 className="text-xl md:text-[18px] uppercase text-cyan-400 font-extrabold animate-pulse mt-6 my-2">
                  Next.js
                </h1>
                <div className="bg-cyan-200/20 h-4 rounded-full">
                  <div className="bg-cyan-400 w-[70%] h-full text-xs flex justify-center items-center text-black font-bold rounded-full">
                    70%
                  </div>
                </div>
              </div>
              <div className="my-8">
                <h1 className="text-xl md:text-[18px] uppercase text-cyan-400 font-extrabold animate-pulse mt-6 my-2">
                  React.js
                </h1>
                <div className="bg-cyan-200/20 h-4 rounded-full">
                  <div className="bg-cyan-400 w-[85%] h-full text-xs flex justify-center items-center text-black font-bold rounded-full">
                    85%
                  </div>
                </div>
              </div>
              <div className="my-8">
                <h1 className="text-xl md:text-[18px] uppercase text-cyan-400 font-extrabold animate-pulse mt-6 my-2">
                  Tailwind CSS
                </h1>
                <div className="bg-cyan-200/20 h-4 rounded-full">
                  <div className="bg-cyan-400 w-[90%] h-full text-xs flex justify-center items-center text-black font-bold rounded-full">
                    90%
                  </div>
                </div>
              </div>
              <div className="my-8">
                <h1 className="text-xl md:text-[18px] uppercase text-cyan-400 font-extrabold animate-pulse mt-6 my-2">
                  Node.js
                </h1>
                <div className="bg-cyan-200/20 h-4 rounded-full">
                  <div className="bg-cyan-400 w-[30%] h-full text-xs flex justify-center items-center text-black font-bold rounded-full">
                    30%
                  </div>
                </div>
              </div>
              <div className="my-8">
                <h1 className="text-xl md:text-[18px] uppercase text-cyan-400 font-extrabold animate-pulse mt-6 my-2">
                  SQL
                </h1>
                <div className="bg-cyan-200/20 h-4 rounded-full">
                  <div className="bg-cyan-400 w-[60%] h-full text-xs flex justify-center items-center text-black font-bold rounded-full">
                    60%
                  </div>
                </div>
              </div>
              <div className="my-8">
                <h1 className="text-xl md:text-[18px] uppercase text-cyan-400 font-extrabold animate-pulse mt-6 my-2">
                  MongoDB
                </h1>
                <div className="bg-cyan-200/20 h-4 rounded-full">
                  <div className="bg-cyan-400 w-[40%] h-full text-xs flex justify-center items-center text-black font-bold rounded-full">
                    40%
                  </div>
                </div>
              </div>
              <div className="my-8">
                <h1 className="text-xl md:text-[18px] uppercase text-cyan-400 font-extrabold animate-pulse mt-6 my-2">
                  React Native
                </h1>
                <div className="bg-cyan-200/20 h-4 rounded-full">
                  <div className="bg-cyan-400 w-[40%] h-full text-xs flex justify-center items-center text-black font-bold rounded-full">
                    40%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-yellow-400 hover:border-blue-500 p-3 rounded-md w-1/3">
            <h2 className="mb-2 font-bold">Education</h2>
          </div>
        </div>
      </div>
      <div className="border-2 border-yellow-400 hover:border-blue-500 p-3 rounded-md w-full mt-8 h-40">
        <h4>Tech stack:</h4>
      </div>
    </section>
  );
};

export default AboutDetails;
