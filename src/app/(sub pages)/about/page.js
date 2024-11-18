import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import bg from "../../../../public/background/home-background.webp";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="relative w-full h-screen flex flex-col items-center justify-center ">
        <div className="absolute flex flex-col items-center text-center sm:top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="relative  flex items-center justify-center">
            <Image
              src="/me.jpeg"
              alt="Viswajith V P"
              className="rounded border-2 border-yellow-400 hover:border-blue-500"
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

      <AboutDetails />
    </>
  );
}

