// 'use client'
// import React from "react";
// import { FaArrowDown, FaHeart } from "react-icons/fa";
// import Link from "next/link";
// import { Anton } from "next/font/google";
// import { motion } from "framer-motion";

// const anton = Anton({ weight: ["400"], subsets: ["latin"] });

// const Hero = () => {
//   return (
//     <section
//       className="h-[750px] flex justify-center items-center rounded-br-full bg-primary"
//       id="home"
//     >
//       <div className=" flex flex-col justify-between max-w-[1400px] w-[90vw] mx-auto gap-3 text-white">
//         <h1
          
//           className={`text-7xl lg:text-8xl font-semibold text-white first-letter:text-accent ${anton.className}`}
//         >
//           Natasha Johnson
//         </h1>
//         <p className="text-lg md:text-2xl text-white font-light">
//           Software Engineer @{" "}
//           <Link
//             href="https://www.township.agency"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-accent"
//           >
//             Township
//           </Link>
//         </p>
//         {/* <p className="text-lg md:text-2xl text-primary font-light">
//           Founder @{" "}
//           <Link
//             href="https://www.ten23.agency/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-accent"
//           >
//             Ten-23 Agency LLC
//           </Link>
//         </p> */}
//         <p className="flex items-center gap-2 text-lg md:text-2xl font-light mt-4">
//           I <FaHeart className="text-accent" /> Front End Development.
//         </p>
//         <div className="mt-12 flex flex-row gap-4">
//           <Link
//             href="#projects"
//             className="bg-accent text-white rounded-xl px-4 py-3 hover:bg-black animate-bounce flex items-center gap-2"
//           >
//             View Projects <FaArrowDown />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

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
        delay: 0.2,
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="h-[800px] flex justify-center items-center rounded-br-full bg-primary"
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
