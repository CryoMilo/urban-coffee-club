"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Hamburger from "./Hamburger";

const navLinks = [
  { title: "Explore", url: "#explore" },
  { title: "About Us", url: "#about-us" },
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

  return (
    <nav ref={container}>
      <div className="bg-transparent absolute my-3 top-0 left-0 z-40 w-full">
        <div className="container mx-auto flex justify-between w-full items-center">
          <div className="select-none invisible md:visible text-white font-primary uppercase font-bold text-accent text-3xl">
            Urban.
          </div>
          <button className="text-white" onClick={toggleDropdown}>
            <Hamburger
              containerStyles={
                isDropdownOpen
                  ? "border-accent transition-all ease-in-out duration-500 delay-300"
                  : "border-white transition-all ease-in-out duration-500 delay-300"
              }
              open={isDropdownOpen}
            />
          </button>
        </div>
      </div>
      <div
        className="w-full bg-black z-30 h-[100vh] translate-y-[-100vh] overflow-hidden grid absolute left-0 place-items-center"
        id="dropdown-nav"
      >
        <div className="w-36 flex text-accent font-secondary text-center text-3xl gap-4 flex-col">
          {navLinks.map(({ title, url }, index) => {
            return (
              <Link
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
