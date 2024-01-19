import Link from "next/link";
import React from "react";
import {
  FaHeart,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaCodepen,
  FaArrowUp,
  FaLinkedin,
} from "react-icons/fa";

type Props = {};

function MinimalFooter({}: Props) {
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer className="flex flex-col sticky w-full mt-auto pt-8 px-4 bg-primary text-white">
      <div className="max-w-[1400px] w-[90vw] mx-auto">
        <div className="flex flex-col gap-6 sm:flex-row items-center justify-between mb-6">
          <p className="text-3xl font-bold text-accent">{"<NJ />"}</p>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/artsycoder533"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub
                className="text-3xl hover:text-accent"
                alt="Github"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/natasha--johnson/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin
                className="text-3xl hover:text-accent"
                alt="LinkedIn"
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCOGjYAACGwNLzYcTpXnvZ_Q"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube
                className="text-3xl hover:text-accent"
                alt="Youtube"
              />
            </Link>
            <Link
              href="https://codepen.io/artsycoder"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Codepen"
            >
              <FaCodepen
                className="text-3xl hover:text-accent"
                alt="Codepen"
              />
            </Link>
            <Link
              href="https://twitter.com/artsycoder533"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter
                className="text-3xl hover:text-accent"
                alt="Twitter"
              />
            </Link>
          </div>
          <Link href="#home" className="flex flex-row gap-2 items-center text-white hover:text-accent">
            Back to Top <FaArrowUp />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center py-4 border-t border-black w-full">
          <p className="text-xs w-full text-center">
            &copy; {getDate()} All Rights Reserved. 
          </p>
          <p className="text-xs flex items-center gap-1 text-center">Made with <FaHeart className="text-red-500"/> by:
            Natasha Johnson</p>
        </div>
      </div>
    </footer>
  );
}

export default MinimalFooter;
