import ProjectList from "@/components/projects/index.jsx";
import { projectsData } from "../../data";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-5xl xs:text-5xl sm:text-3xl lg:text-5xl text-white mb-20">
        Projects
      </h1>
      <ProjectList/>
      {/* <ProjectList projects={projectsData} /> */}
    </>
  );
}
