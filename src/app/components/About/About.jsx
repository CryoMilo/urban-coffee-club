"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      sectionRefs.current.forEach((section, index) => {
        const tl = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            scrub: 0.5,
          },
        });

        tl.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
          }
        );

        const line = section.querySelector("#line");
        if (line) {
          tl.fromTo(
            line,
            { height: "0vh" },
            {
              height: "30vh",
              ease: "power1.in",
            },
            ">1"
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const journeyContent = [
    {
      imageSrc: "/assets/about/1.png",
      imageAlt: "coffee-farms",
      title: "Humble Beginnings",
      placement: "left",
      description:
        "Our journey began on a small roadside stand, where a passion for coffee and community was first brewed.",
    },
    {
      imageSrc: "/assets/about/2.png",
      imageAlt: "community",
      title: "Building Connections",
      placement: "right",
      description:
        "From those early days, we focused on creating a space where people could come together over a great cup of coffee.",
    },
    {
      imageSrc: "/assets/about/3.png",
      imageAlt: "premium beans",
      title: "Expanding Horizons",
      placement: "left",
      description:
        "As we grew, we began sourcing premium beans and crafting signature blends to elevate the coffee experience.",
    },
    {
      imageSrc: "/assets/about/4.png",
      imageAlt: "community hub",
      title: "A Beloved Destination",
      placement: "right",
      description:
        "Today, we’re proud to be a thriving community hub where people can relax, connect, and enjoy the art of coffee.",
    },
  ];

  return (
    <section
      className="font-primary bg-white flex flex-col gap-10 lg:gap-0 text-black overflow-hidden my-20"
      ref={containerRef}
    >
      {journeyContent.map((item, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="grid md:grid-cols-[60px_1fr] mx-20 lg:mx-0 lg:grid-cols-[1fr_80px_1fr] place-items-center opacity-0"
        >
          {/* Left Content */}
          <div
            className={`hidden lg:flex items-center ${
              item.placement === "right" && "invisible"
            }`}
          >
            <article className="max-w-[300px] text-right">
              <strong className="text-lg">{item.title}</strong>
              <p>{item.description}</p>
            </article>
            <div className="w-[300px] aspect-square relative">
              <Image
                className="object-cover"
                quality={100}
                fill
                alt={item.imageAlt}
                src={item.imageSrc}
              />
            </div>
          </div>

          {/* Middle Line */}
          <div className="relative md:block hidden">
            {index + 1 !== 4 && (
              <div
                id="line"
                className={`absolute left-[50%] translate-x-[-50%] top-[120%] border-r-[3px] border-black border-solid`}
              ></div>
            )}
            <div className="mx-3 grid place-items-center font-primary aspect-square text-2xl w-10 h-10 bg-black rounded-full text-white">
              {index + 1}
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`flex flex-col md:flex-row items-center ${
              item.placement === "left" && "visible lg:invisible"
            }`}
          >
            <div className="w-[300px] aspect-square relative">
              <Image
                className="object-cover"
                quality={100}
                fill
                alt={item.imageAlt}
                src={item.imageSrc}
              />
            </div>
            <article className="max-w-[300px]">
              <strong className="text-lg">{item.title}</strong>
              <p>{item.description}</p>
            </article>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
