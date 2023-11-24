import React from 'react'
import { SiNextdotjs, SiTailwindcss, SiStyledcomponents} from "react-icons/si";
import { FaReact, FaVuejs, FaSass, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

type Props = {}

const Skills = (props: Props) => {
  return (
    <section className="border py-32 bg-primary" id="skills">
        <h2 className="text-6xl mb-10 font-semibold max-w-[1400px] w-[90vw] mx-auto text-secondary">Skills.</h2>
        <div className="max-w-[1400px] w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center text-2xl font-medium text-accent gap-16">
            <div className="flex flex-col items-center gap-1 text-center">
                <SiNextdotjs className="text-7xl"/>
                <p>Next.js</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
                <FaReact className="text-7xl"/>
                <p>React Native</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
                <FaVuejs className="text-7xl"/>
                <p>Vue</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
                <IoLogoJavascript className="text-7xl"/>
                <p>Javascript</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
                <SiTailwindcss className="text-7xl"/>
                <p>Tailwind</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
                <SiStyledcomponents className="text-7xl"/>
                <p>Styled Components</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
                <FaSass className="text-7xl"/>
                <p>Sass</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
                <FaCss3 className="text-7xl"/>
                <p>CSS</p>
            </div>
        </div>
    </section>
  )
}

export default Skills