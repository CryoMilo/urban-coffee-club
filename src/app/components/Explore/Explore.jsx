"use client";

import Image from "next/image";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const coffeeCupRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      coffeeCupRef.current,
      { y: -20 },
      {
        y: 20,
        delay: 0.5,
        duration: 10,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: coffeeCupRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      id="explore"
      className="container grid grid-cols-1 select-none md:grid-cols-3 grid-rows-5 md:grid-rows-2 min-h-[300px] md:min-h-[600px] px-0 py-20 sm:px-10 gap-5"
    >
      <div className="flex flex-col items-center md:items-end gap-4 self-start p-4 text-black">
        <Image
          src="/assets/explore/brew.svg"
          alt="beans"
          width={35}
          height={35}
          className="aspect-square"
        />
        <p className="text-xl text-center md:text-right">Exceptional Quality</p>
        <p className="text-md text-center md:text-right text-gray-500">
          Our premium beans and roasting techniques to bring out the best
          flavors.
        </p>
      </div>

      {/* Middle Image */}
      <div className="md:row-span-2 hidden md:grid place-items-center">
        <div className="relative w-full aspect-square ml-12" ref={coffeeCupRef}>
          <Image
            src="/assets/explore/coffee-cup.png"
            alt="coffee-cup"
            className="object-cover"
            quality={100}
            priority
            fill
          />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start self-start gap-4 p-4 text-black">
        <Image
          src="/assets/explore/cup.svg"
          alt="beans"
          width={40}
          height={40}
          className="aspect-square"
        />
        <p className="text-xl text-center md:text-left">Unique Blend</p>

        <p className="text-md text-gray-500 text-center md:text-left">
          Our baristas craft exclusive blends and unique drinks for you to
          enjoy.
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end self-start gap-4 p-4 text-black">
        <Image
          src="/assets/explore/leaf.svg"
          alt="beans"
          width={40}
          height={40}
          className="aspect-square"
        />
        <p className="text-xl text-center md:text-right">Sustainable</p>
        <p className="text-md text-gray-500 text-center md:text-right">
          We prioritize fair trade and sustainable practices to support
          environment
        </p>
      </div>
      <div className="flex flex-col items-center md:items-start self-start gap-4 p-4 text-black">
        <Image
          src="/assets/explore/cafe.svg"
          alt="beans"
          width={40}
          height={40}
          className="aspect-square"
        />
        <p className="text-xl text-center md:text-left">Cozy Environment</p>
        <p className="text-md text-gray-500 text-center md:text-left">
          Our cozy spaces offers a perfect spot for relaxation, work, or
          gatherings.
        </p>
      </div>
    </div>
  );
};

export default Explore;
