import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  tags: string[];
  img: StaticImageData;
  description: string;
  // technologies: string;
  siteURL: string;
  github: string;
};

function ProjectCard({
  title,
  tags,
  img,
  description,
  // technologies,
  siteURL,
  github,
}: Props) {
  return (
    <div className="border flex flex-col gap-4 p-4 rounded-lg bg-white shadow-md">
      <div className="w-full ">
        <Image
          src={img?.src}
          width={800}
          height={250}
          className="object-cover"
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
      {/* <p className="text-sm text-gray-500 flex-grow">
        Technologies: {technologies}
      </p> */}

      <div className="flex flex-row gap-2 mt-auto">
        <Link
          href={siteURL}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-row gap-1 items-center border bg-accent hover:bg-[#9E1E23] text-white rounded-lg px-4 py-3 flex-shrink-0"
        >
          Live Site <FaExternalLinkAlt />
        </Link>
        <Link
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="flex flex-row gap-1 items-center border border-accent text-accent hover:bg-gray-200 rounded-lg px-4 py-3 flex-shrink-0"
        >
          See Code <FaGithub />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
