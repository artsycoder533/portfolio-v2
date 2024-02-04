import React from "react";
import { FaArrowDown, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({weight: ['400'], subsets: ["latin"]});

const Hero = () => {
  return (
    <section className="h-[600px] flex justify-center items-center rounded-br-full bg-white" id="home">
      <div className=" flex flex-col justify-between max-w-[1400px] w-[90vw] mx-auto">
        <h1 className={`text-7xl lg:text-8xl font-semibold text-primary first-letter:text-accent ${anton.className}`}>
          Natasha Johnson
        </h1>
        <p className="text-lg md:text-2xl text-primary font-light">
          Software Engineer @{" "}
          <Link
            href="https://www.township.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            Township
          </Link>
        </p>
        {/* <p className="text-lg md:text-2xl text-primary font-light">
          Founder @{" "}
          <Link
            href="https://www.ten23.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            Ten-23 Agency LLC
          </Link>
        </p> */}
        <p className="flex items-center gap-2 text-lg md:text-2xl font-light mt-4">
          I <FaHeart className="text-accent" /> Front End Development.
        </p>
        <div className="mt-12 flex flex-row gap-4">
          <Link
            href="#projects"
            className="border bg-accent text-white rounded-lg px-4 py-3 hover:bg-black animate-bounce flex items-center gap-2"
          >
            View Projects <FaArrowDown />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
