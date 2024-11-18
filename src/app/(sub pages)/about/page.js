import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col items-center justify-center ">
        <div className="absolute flex flex-col items-center text-center sm:top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="relative flex items-center justify-center border-[1px] border-green-400 shadow-xl shadow-green-400">
            <Image
              src="/me.jpeg"
              alt="Viswajith V P"
              className="rounded "
              width={320}
              height={220}
            />
          </div>
          <h1 className="font-bold  text-5xl xs:text-5xl sm:text-3xl lg:text-8xl text-white mt-6">
            About me
          </h1>
          <div className="animate-scroll flex items-center justify-center w-12 h-12 mt-8">
            <IoIosArrowDown className="text-foreground text-6xl" />
          </div>
        </div>
      </div>

      <AboutDetails className="w-full" />
    </>
  );
}
