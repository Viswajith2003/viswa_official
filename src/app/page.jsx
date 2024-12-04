"use client";

import StarField from "../components/starfield/StarField";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import { IoCodeSlashSharp } from "react-icons/io5";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <StarField />

      <div className="w-full h-screen absolute">
        <Navigation />
        <div className="flex flex-col justify-start md:justify-center items-center mt-[350px] md:mt-[350px] space-y-6">
          <p className="md:text-3xl text-2xl ">Hi, I&apos;m</p>
          <p className="md:text-8xl text-5xl font-bold">Viswajith.</p>
          <div className="flex space-x-3">
            <IoCodeSlashSharp className="text-[#2032ff] md:text-5xl text-2xl mt-1 md:mt-0" />
            <div className="md:text-4xl text-2xl text-[#30ff15] md:mt-1 ">
              <Typewriter
                options={{
                  strings: ["Full-stack developer", "Dancer", "UI/UX designer"],
                  autoStart: true,
                  loop: true,
                  delay: 75, // Speed of typing
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
