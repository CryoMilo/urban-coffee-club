"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";

const navLinks = [
  { title: "Explore", url: "#explore" },
  { title: "About Us", url: "#about" },
  { title: "Menu", url: "#menu" },
  { title: "Location", url: "#location" },
];

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const container = useRef();
  const t1 = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  useEffect(() => {
    t1.current = gsap.timeline({ paused: true });
    t1.current
      .to("#dropdown-nav", {
        y: "0",
        duration: 0.5,
        delay: 0.4,
        ease: "power2.in",
      })
      .from("#nav-title", {
        opacity: 0,
        stagger: 0.1,
      });
  }, []);

  const toggleDropdown = contextSafe(() => {
    if (!isDropdownOpen) {
      t1.current.play();
    } else {
      t1.current.reverse();
    }
    setDropdownOpen(!isDropdownOpen);
  });

  const linkClicked = contextSafe(() => {
    t1.current.reverse();
    setDropdownOpen(false);
  });

  return (
    <nav ref={container}>
      <div className="absolute left-0 top-0 z-40 my-3 w-full bg-transparent">
        <div className="container mx-auto flex w-full items-center justify-between">
          <Link href="#">
            <div className="invisible select-none font-primary text-3xl font-bold uppercase text-accent text-white md:visible">
              Urban.
            </div>
          </Link>
          <button className="text-white" onClick={toggleDropdown}>
            <Hamburger
              containerStyles={
                isDropdownOpen
                  ? "border-accent transition-all ease-in-out duration-500 delay-300"
                  : "border-white transition-all ease-in-out duration-500 delay-300"
              }
            />
          </button>
        </div>
      </div>
      <div
        className="fixed z-30 grid h-full w-full translate-y-[-100vh] place-items-center overflow-hidden bg-black"
        id="dropdown-nav"
      >
        <div className="flex w-36 flex-col gap-4 text-center font-secondary text-3xl text-accent">
          {navLinks.map(({ title, url }, index) => {
            return (
              <Link
                onClick={linkClicked}
                className="cursor-pointer hover:text-soft"
                id="nav-title"
                href={url}
                key={index}
              >
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
