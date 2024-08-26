'use client'
import React from "react";
import { FaArrowDown, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { Anton } from "next/font/google";
import { motion } from "framer-motion";

const anton = Anton({ weight: ["400"], subsets: ["latin"] });

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="h-[100vh] sm:h-[70vh] flex justify-center items-center rounded-br-full bg-primary"
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col justify-between max-w-[1400px] w-[90vw] mx-auto gap-3 text-white"
        variants={containerVariants}
      >
        <motion.h1
          className={`text-7xl lg:text-8xl font-semibold text-white first-letter:text-accent ${anton.className}`}
          variants={itemVariants}
        >
          Natasha Johnson
        </motion.h1>
        <motion.p className="text-lg md:text-2xl text-white font-light" variants={itemVariants}>
          Software Engineer @{" "}
          <Link
            href="https://www.township.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            Township
          </Link>
        </motion.p>
        <motion.p
          className="flex items-center gap-2 text-lg md:text-2xl font-light mt-4"
          variants={itemVariants}
        >
          I <FaHeart className="text-accent" /> Front End Development.
        </motion.p>
        <motion.div className="mt-12 flex flex-row gap-4" variants={itemVariants}>
          <Link
            href="#projects"
            className="bg-accent text-white rounded-xl px-4 py-3 hover:bg-black animate-bounce flex items-center gap-2"
          >
            View Projects <FaArrowDown />
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
