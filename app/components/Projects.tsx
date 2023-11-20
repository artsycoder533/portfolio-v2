import React from "react";
import Image from "next/image";
import omni from "../../public/images/omni.png";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {projects} from '../utils/data'
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="py-32 bg-gray-200" id="projects">
      <div className="max-w-[1400px] w-[90vw] mx-auto flex flex-col ">
        <h2 className="text-6xl my-6 font-semibold">Projects.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4">{projects?.map(project => <ProjectCard {...project} key={project.title}/>)}</div>
       
      </div>
    </section>
  );
};

export default Projects;
