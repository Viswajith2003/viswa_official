import StarField from "../components/starfield/StarField";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
// const Wizard = dynamic(() => import("@/components/models/Wizard"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <StarField />

      <div className="w-full h-screen absolute">
        <Navigation />
        <div className="flex flex-col justify-start md:justify-center items-center mt-[350px] md:mt-[350px] space-y-6">
          <p className="md:text-3xl text-2xl ">Hi, I'm</p>
          <p className="md:text-8xl text-5xl font-bold">Viswajith.</p>
          <p className="md:text-4xl text-2xl text-blue-600">
            Full-stack developer
          </p>
        </div>
      </div>
    </main>
  );
}
