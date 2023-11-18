import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import omni from "../../public/images/omni.png";

type Props = {
  title: string;
  tags: string[];
  img: StaticImageData;
  description: string;
  technologies: string;
  siteURL: string;
  github: string;
};

function ProjectCard({
  title,
  tags,
  img,
  description,
  technologies,
  siteURL,
  github,
}: Props) {
  return (
    <div className="border flex flex-col gap-6 p-4 rounded-lg">
      <div className="w-full h-[200px] bg-red-500 relative">
        <Image
          src={img?.src}
          // width={600}
          // height={250}
          fill
          alt="Omni Addictional & Mental Health Services home page"
        />
      </div>
   
        <h3 className="text-xl font-semibold">{title}</h3>
        {tags && tags.length > 0 && (
          <div className="flex gap-2 flex-grow">
            {tags.map((tag) => (
              <span
                key="tag"
                className="border self-start px-2 rounded-xl bg-green-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="flex-grow">{description}</p>
        <p className="text-sm text-gray-500 flex-grow">Technologies: {technologies}</p>
   
      <div className="flex flex-row gap-2 mt-auto">
          <Link
            href={siteURL}
            className="flex flex-row gap-1 items-center border bg-blue-500 text-white rounded px-3 py-2 hover:bg-blue-700 flex-shrink-0"
          >
            Live Site <FaExternalLinkAlt />
          </Link>
          <Link
            href={github}
            className="flex flex-row gap-1 items-center border border-blue-500 text-blue-500 rounded px-3 py-2 hover:bg-blue-200 flex-shrink-0"
          >
            See Code <FaGithub />
          </Link>
        </div>
    </div>
  );
}

export default ProjectCard;
