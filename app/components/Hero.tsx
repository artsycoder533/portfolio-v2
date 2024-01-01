import React from "react";
import Image from "next/image";
import headshot from "../../public/images/headshot.jpg";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className=" h-[600px] flex items-center" id="home">
      <div className="max-w-[1400px] w-[90vw] mx-auto flex flex-col justify-between">
  
          <h1 className="text-8xl font-semibold text-primary first-letter:text-accent">
            Natasha Johnson
          </h1>
          <p className="text-3xl text-primary">Software Engineer @ Township</p>
          <p className="flex items-center gap-1 mt-4">
            I <FaHeart className="text-red-500" /> the front end.
          </p>
          <div className="mt-6 flex flex-row gap-4">
            <Link
              href="#projects"
              className="border bg-accent text-white rounded-lg px-4 py-3 hover:bg-secondary"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="border border-accent text-accent rounded-lg px-4 py-3 hover:text-secondary hover:border-secondary"
            >
              Contact
            </Link>
          </div>
        
      </div>
    </section>
  );
};

export default Hero;
