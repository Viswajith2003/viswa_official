"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Forms() {
  return (
    <motion.section
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="contact"
      className="pb-16 container mx-auto md:ml-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
          variants={container}
          className="card p-3 rounded-lg h-auto text-black space-y-4 mx-auto md:ml-8 md:mr-4"
        >
          <div className="space-y-6 mt-8 text-white w-full md:w-96">
            <input
              type="text"
              placeholder="Name :"
              className="border-2 border-white p-3 rounded-md h-12 w-full bg-transparent"
            />
            <input
              type="email"
              placeholder="Email :"
              className="border-2 border-white p-3 rounded-md h-12 w-full bg-transparent"
            />
            <textarea
              name="message"
              placeholder="Message :"
              className="border-2 border-white p-3 rounded-md h-40 md:h-52 w-full bg-transparent"
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <motion.div
              variants={container}
              className="flex space-x-5 mt-3 text-white border-[1px] rounded-lg p-[6px] text-center"
            >
              <BsGithub className="w-6  h-6  hover:scale-95" />
              <BsInstagram className="w-6 h-6 hover:scale-95" />
              <FaLinkedin className="w-6  h-6  hover:scale-95" />
              <AiFillYoutube className="w-8 h-8 hover:scale-95 " />
            </motion.div>
            <button className="p-2 w-36 mt-3 font-bold text-white rounded-lg border-[1px] hover:scale-95">
              Submit
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-[540px] h-[300px] sm:h-[450px] rounded-lg bg-slate-900 mx-auto mt-8 md:mt-0"
        >
          <iframe
            title="google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25869.703228616378!2d75.84910382798228!3d11.088537940849525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6522474222987%3A0x2de01cb6b87aafe5!2sKoottumoochi!5e0!3m2!1sen!2sin!4v1708170014170!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full rounded-lg"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
}

