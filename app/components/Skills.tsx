import React from 'react'
import { SiNextdotjs, SiTailwindcss, SiSanity, SiTypescript} from "react-icons/si";
import { FaReact, FaVuejs, FaShopify } from "react-icons/fa";
import Title from './Title';

const Skills = () => {
  return (
    <section className="py-32 bg-primary" id="skills">
        <Title title="Skills" alt/>
        <div className="max-w-[1400px] w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 justify-center text-2xl font-medium text-accent gap-16">
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
                <SiTypescript className="text-7xl"/>
                <p>TypeScript</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
                <SiTailwindcss className="text-7xl"/>
                <p>Tailwind</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
                <SiSanity className="text-7xl"/>
                <p>Sanity</p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
                <FaShopify className="text-7xl"/>
                <p>Shopify</p>
            </div>
        </div>
    </section>
  )
}

export default Skills