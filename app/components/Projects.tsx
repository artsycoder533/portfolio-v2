import React from "react";
import { projects } from "../utils/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="py-32 bg-background" id="projects">
      <div className="max-w-[1400px] w-[90vw] mx-auto flex flex-col ">
        <h2 className="text-6xl my-6 font-semibold">Projects.</h2>
        <div className="grid lg:grid-cols-2 gap-8 w-full">
          {projects?.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
