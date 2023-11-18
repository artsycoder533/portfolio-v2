import React from 'react'
import { SiNextdotjs, SiTailwindcss, SiStyledcomponents} from "react-icons/si";
import { FaReact, FaVuejs, FaSass, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

type Props = {}

const Skills = (props: Props) => {
  return (
    <section className="border py-14">
        <h2 className="text-6xl my-8 font-semibold max-w-[1400px] w-[90vw] mx-auto">Skills.</h2>
        <div className="max-w-[1400px] w-[90vw] mx-auto flex flex-row justify-center text-2xl font-medium text-gray-500 gap-8 flex-wrap">
            <div className="flex flex-row items-center gap-1 ">
                <SiNextdotjs className="text-3xl"/>
                <p>Next.js</p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <FaReact className="text-3xl"/>
                <p>React Native</p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <FaVuejs className="text-3xl"/>
                <p>Vue</p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <IoLogoJavascript className="text-3xl"/>
                <p>Javascript</p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <SiTailwindcss className="text-3xl"/>
                <p>Tailwind</p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <SiStyledcomponents className="text-5xl"/>
                <p>Styled Components</p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <FaSass className="text-3xl"/>
                <p>Sass</p>
            </div>
            <div className="flex flex-row items-center gap-1">
                <FaCss3 className="text-3xl"/>
                <p>CSS</p>
            </div>
        </div>
    </section>
  )
}

export default Skills