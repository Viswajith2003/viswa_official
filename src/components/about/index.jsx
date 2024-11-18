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
              src="/profile-photo.jpg" // Replace with the path to your profile photo
              alt=""
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
              Description
            </div>
            <div className="border-2 border-yellow-400 hover:border-blue-500 p-3 rounded-md h-full">
              Tech skills
            </div>
          </div>
          <div className="border-2 border-yellow-400 hover:border-blue-500 p-3 rounded-md w-1/3">
            Education
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
