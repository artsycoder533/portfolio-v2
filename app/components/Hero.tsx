import React from "react";
import { FaArrowDown, FaHeart } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[600px] flex justify-center items-center rounded-br-full bg-white" id="home">
      <div className=" flex flex-col justify-between max-w-[1400px] w-[90vw] mx-auto">
        <h1 className="text-7xl lg:text-8xl font-semibold text-primary first-letter:text-accent">
          Natasha Johnson
        </h1>
        <p className="text-2xl text-primary font-light">
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
        <p className="text-2xl text-primary font-light">
          Founder @{" "}
          <Link
            href="https://www.ten23.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            Ten-23 Agency LLC
          </Link>
        </p>
        <p className="flex items-center gap-2 text-2xl font-light">
          I <FaHeart className="text-red-500" /> Front End Development.
        </p>
        <div className="mt-12 flex flex-row gap-4">
          <Link
            href="#projects"
            className="border bg-accent text-white rounded-lg px-4 py-3 hover:bg-[#9E1E23] animate-bounce flex items-center gap-2"
          >
            View Projects <FaArrowDown />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
