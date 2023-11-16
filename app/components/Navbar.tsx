"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";
import RotatingHamburger from "./RotatingHamburger";
import { useEffect } from "react";

const navItems = [
  { link: "Home", path: "/" },
  { link: "Projects", path: "#projects" },
  { link: "About", path: "#about" },
  { link: "Contact", path: "#contact" },
];

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    // Cleanup function to reset the style when the component unmounts or when the 'open' state changes.
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [open]);

  return (
    <nav className="flex items-center justify-between max-w-[1400px]  flex-col md:flex-row md:w-full mx-auto py-2">
      <div className="flex items-center justify-between w-full md:w-auto">
        <p className="text-xl font-bold">{'<NJ />'}</p>

        <RotatingHamburger open={open} setOpen={setOpen} />
      </div>
      <ul
        className={
          "flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[60px] left-0 right-0 h-[calc(100vh-91px)] md:h-auto bg-white transition-all ease-in-out duration-500 " +
          (open ? "translate-x-0" : "translate-x-[100vh] md:translate-x-0")
        }
      >
        {navItems.map((navItem, index) => {
          const { link, path } = navItem;
          return (
            <li key={index}>
              <Link
                className="text-2xl md:text-base hover:underline py-2 hover:text-[#1A8B90]"
                href={path}
                scroll={false}
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
