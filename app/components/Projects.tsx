import React, { useRef } from "react";
import { projects } from "../utils/data";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const Projects = () => {
  return (
    <section className="py-32 bg-primary rounded-tl-full" id="projects">
      <div className="max-w-[1400px] w-[90vw] mx-auto flex flex-col ">
        <Title title="Projects" alt />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          {projects?.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
