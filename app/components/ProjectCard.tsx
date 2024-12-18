"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {
  title: string;
  tags: string[];
  img: StaticImageData;
  description?: string;
  siteURL: string;
  github?: string;
  extensionURL?: string;
};

function ProjectCard({
  title,
  tags,
  img,
  description,
  siteURL,
  github,
  extensionURL,
}: Props) {

  return (
    <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0 }}
      className="border flex flex-col gap-4 p-4 rounded-lg bg-white shadow-md"
    >
      <div className="relative w-full h-72">
        <Image
          src={img?.src}
          fill
          className="object-contain lg:objecct-cover aspect-video"
          alt={`${title} home page`}
          priority
        />
      </div>

      <h3 className="text-2xl font-semibold h-14 text-accent">{title}</h3>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap flex-grow gap-2 ">
          {tags.map((tag, index) => (
            <span
              key={`${tag + index}`}
              className="border self-start px-2 rounded-xl bg-background"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="flex-grow">{description}</p>

      <div className="flex flex-row flex-wrap justify-center gap-2 mt-auto">
        <Link
          href={siteURL}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-row gap-1 items-center bg-accent hover:bg-black text-white rounded-xl px-4 py-3 flex-shrink-0"
        >
          Live Site <FaExternalLinkAlt />
        </Link>
        {github && <Link
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-row gap-1 items-center border border-accent text-accent hover:bg-black hover:text-white rounded-xl px-4 py-3 flex-shrink-0"
        >
          See Code <FaGithub />
        </Link>}
        {extensionURL && <Link
          href={extensionURL}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-row gap-1 items-center border border-accent text-accent hover:bg-black hover:text-white rounded-xl px-4 py-3 flex-shrink-0"
        >
          Extension <FaExternalLinkAlt />
        </Link>}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
