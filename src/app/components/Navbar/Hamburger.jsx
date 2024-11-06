"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hamburger = ({ containerStyles = "border-white" }) => {
  return (
    <div className="w-[30px] flex gap-2 flex-col cursor-pointer">
      <div
        id="top"
        className={`border-b-[2px] ${containerStyles} w-full h-[2px]`}
      ></div>
      <div
        id="middle"
        className={`border-b-[2px] opacity-100 ${containerStyles} w-full h-[2px]`}
      ></div>
      <div
        id="bottom"
        className={`border-b-[2px] ${containerStyles} w-full h-[2px]`}
      ></div>
    </div>
  );
};

export default Hamburger;
