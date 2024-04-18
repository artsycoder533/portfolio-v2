import React from "react";
import { justForFun } from "../utils/data";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

const ForFun = () => {
  return (
    <section className="py-32 bg-background rounded-tl-full rounded-bl-full" id="just-for-fun">
      <div className="max-w-[1400px] w-[90vw] mx-auto flex flex-col ">
        <Title title="Just For Fun" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 w-full">
          {justForFun?.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForFun;