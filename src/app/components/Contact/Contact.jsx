"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const cupRef = useRef(null);
  const cupSleeveRef = useRef(null);
  const containerRef = useRef(null);
  const rollOutCupSleeveRef = useRef(null);

  useEffect(() => {
    // Check if cupRef and cupSleeveRef are available
    if (
      !cupRef.current ||
      !cupSleeveRef.current ||
      !rollOutCupSleeveRef.current
    )
      return;

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none", // Play the animation only once
        },
      });

      // Add animations to the timeline
      t1.to(["#container", "#rolled-out-cup-sleeve"], { left: "20%" }).to(
        "#rolled-out-cup-sleeve",
        {
          left: 0,
          translateX: "20%",
          width: "75%",
        },
        1,
      );
    });

    // Cleanup the context on unmount
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative m-20 h-[60vh]">
      <div
        id="container"
        ref={containerRef}
        className="absolute left-[50%] top-0 translate-x-[-50%]"
      >
        <div id="cup" ref={cupRef} className="relative h-[60vh] w-[350px]">
          <Image
            src="/assets/contact/coffee-cup-cropped.jpg"
            alt="coffee-cup"
            quality={100}
            fill
          />
        </div>

        <div
          ref={cupSleeveRef}
          id="cup-sleeve"
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
          }}
          className="absolute left-6 top-[53%] h-[30vh] w-[300px] origin-top translate-y-[-50%] rounded-md bg-accent"
        ></div>
      </div>

      <div
        id="rolled-out-cup-sleeve"
        ref={rollOutCupSleeveRef}
        className="absolute left-[50%] top-[53%] h-[30vh] w-[30px] origin-left translate-y-[-50%] rounded-md bg-accent"
      ></div>

      <div className="absolute right-[13%] top-[53%] translate-y-[-50%] bg-transparent">
        <div className="grid h-[200px] max-w-md justify-items-end gap-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 bg-transparent px-4 py-2 outline-none focus:border-primary focus:ring-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 bg-transparent px-4 py-2 outline-none focus:border-primary focus:ring-0"
            />
          </div>
          <textarea
            placeholder="Your message"
            rows="4"
            className="w-full resize-none border-b border-gray-300 bg-transparent px-4 py-2 outline-none focus:border-primary focus:ring-0"
          ></textarea>
          <button className="w-fit rounded-md bg-primary px-4 py-2 text-white outline-none">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
