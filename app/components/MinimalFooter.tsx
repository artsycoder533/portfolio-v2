import Link from "next/link";
import React from "react";
import {
  FaHeart,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaCodepen,
  FaArrowUp,
} from "react-icons/fa";

type Props = {};

function MinimalFooter({}: Props) {
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <footer className="flex flex-col sticky w-full mt-auto pt-4 px-4 bg-gray-500">
      <div className="max-w-[1400px] w-[90vw] mx-auto">
        <div className="flex flex-col gap-6 sm:flex-row items-center justify-between mb-4">
          <p className="text-3xl font-bold">{"<NJ />"}</p>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/artsycoder533"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub
                className="text-3xl hover:text-[#26CCAF]"
                alt="Github"
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCOGjYAACGwNLzYcTpXnvZ_Q"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <FaYoutube
                className="text-3xl hover:text-[#26CCAF]"
                alt="Youtube"
              />
            </Link>
            <Link
              href="https://codepen.io/artsycoder"
              rel="noopener noreferrer"
              aria-label="Codepen"
            >
              <FaCodepen
                className="text-3xl hover:text-[#26CCAF]"
                alt="Codepen"
              />
            </Link>
            <Link
              href="https://twitter.com/artsycoder533"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter
                className="text-3xl hover:text-[#26CCAF]"
                alt="Twitter"
              />
            </Link>
          </div>
          <Link href="#home" className="flex flex-row gap-2 items-center">
            Back to Top <FaArrowUp />
          </Link>
        </div>

        <div className="flex flex-row items-center justify-center py-4 border-t border-black w-full">
          <p className=" flex flex-row  items-center  justify-center gap-1 text-xs w-full">
            &copy; {getDate()} All Rights Reserved. Made with <FaHeart /> by:
            Natasha Johnson
          </p>
        </div>
      </div>
    </footer>
  );
}

export default MinimalFooter;
