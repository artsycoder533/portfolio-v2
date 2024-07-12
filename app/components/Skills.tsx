'use client'
import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSanity,
  SiTypescript,
  SiJavascript,
  SiStyledcomponents,
  SiVitest,
  SiTestinglibrary,
} from "react-icons/si";
import { FaReact, FaVuejs } from "react-icons/fa";
import Title from "./Title";
import { AnimatePresence, motion } from "framer-motion";

const Skills = () => {
  return (
    <AnimatePresence>
    <section className="py-32 bg-primary" id="skills">
      <Title title="Skills" alt />
      <motion.div
        initial={{  color: 'gray' }}
        whileInView={{  color: '#C1292E' }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 5,  ease: "easeInOut" }}
        exit={{color: 'gray'}}
        className="max-w-[1400px] w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center text-2xl font-medium text-accent gap-16"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <SiNextdotjs className="text-7xl" />
          <p>Next.js</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <FaReact className="text-7xl" />
          <p>React/React Native</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <FaVuejs className="text-7xl" />
          <p>Vue</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiTypescript className="text-7xl" />
          <p>TypeScript</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiJavascript className="text-7xl" />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiTailwindcss className="text-7xl" />
          <p>Tailwind</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiStyledcomponents className="text-7xl" />
          <p>Styled Components</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiSanity className="text-7xl" />
          <p>Sanity</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiVitest className="text-7xl" />
          <p>Vitest</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <SiTestinglibrary className="text-7xl" />
          <p>React Testing Library</p>
        </div>
      </motion.div>
    </section>
    </AnimatePresence>
  );
};

export default Skills;
