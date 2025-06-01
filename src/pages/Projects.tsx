import React from "react";
import SectionTitlePage from "./SectionTitlePage";
import { projects } from "../data";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <>
      <SectionTitlePage
        id="projects"
        title="Projects"
        subTitle="Selected Works"
        className="relative z-5"
      />
      <section className="sticky top-0 h-screen relative z-6 bg-primary flex items-center justify-center px-[2rem] py-[2rem] lg:px-[5rem] lg:py-[3rem]">
        <h1 className="text-accent font-primary text-header-sm leading-[calc(1.2_*_var(--text-header-sm))] font-semibold text-center">
          Selected works in <span className="text-secondary">frontend</span> and{" "}
          <span className="text-secondary">UI development.</span>
        </h1>
      </section>
      <div className="w-full flex flex-col gap-[30vh] top-0 left-[50%] -translate-x-[50%] relative z-7 px-[2rem] py-[2rem] lg:px-[3rem] py-[3rem]">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              bannerImage={project.bannerImage}
              index={index + 1}
              projectName={project.projectName}
              techStack={project.techsUsed}
              position={index % 2 === 0 ? "left" : "right"}
            />
          );
        })}
      </div>
    </>
  );
}

export default Projects;
