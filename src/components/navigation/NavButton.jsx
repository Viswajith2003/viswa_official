import {
  Github,
  Home,
  Youtube,
  Linkedin,
  Code, // Replace Palette with Code icon
  Phone,
  Instagram,
  User,
} from "lucide-react";

import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  const icons = {
    home: <Home className="w-full h-auto" strokeWidth={1.5} />,
    about: <User className="w-full h-auto" strokeWidth={1.5} />,
    projects: <Code className="w-full h-auto" strokeWidth={1.5} />, // Updated to use Code icon
    contact: <Phone className="w-full h-auto" strokeWidth={1.5} />,
    github: <Github className="w-full h-auto" strokeWidth={1.5} />,
    linkedin: <Linkedin className="w-full h-auto" strokeWidth={1.5} />,
    youtube: <Youtube className="w-full h-auto" strokeWidth={1.5} />,
    instagram: <Instagram className="w-full h-auto" strokeWidth={1.5} />,
  };

  return (
    icons[icon] || (
      <Home className="w-full h-auto text-[#30ff15]" strokeWidth={1.5} />
    )
  );
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className="absolute cursor-pointer z-50 "
            style={{ transform: `translate(${x}, ${y})` }}
          >
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className=" text-foreground  rounded-full flex items-center justify-center
        custom-bg 
        "
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className=" relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent text-[#33ff13]">
                {getIcon(icon)}

                <span className=" peer text-[#33ff13] absolute top-0 left-0 w-full h-full" />

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 text-[#33ff13] text-sm rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        ) : (
          <div className="w-fit cursor-pointer z-50">
            <NavLink
              variants={item}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground  rounded-full flex items-center justify-center
        custom-bg
        "
              aria-label={label}
              name={label}
              prefetch={false}
              scroll={false}
            >
              <span className="relative  w-10 h-10  xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
                {getIcon(icon)}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />

                <span
                  className={clsx(
                    "absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
