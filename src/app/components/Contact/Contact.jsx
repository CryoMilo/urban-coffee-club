"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const cupRef = useRef(null);
  const cupSleeveRef = useRef(null);
  const containerRef = useRef(null);
  const rollOutCupSleeveRef = useRef(null);
  const formRef = useRef(null);
  const t1 = useRef(null);

  const [cupSleeveOpen, setCupSleeveOpen] = useState(false);

  useEffect(() => {
    // Check if cupRef and cupSleeveRef are available
    if (
      !cupRef.current ||
      !cupSleeveRef.current ||
      !rollOutCupSleeveRef.current
    )
      return;

    let ctx = gsap.context(() => {
      t1.current = gsap.timeline({
        defaults: { duration: 1 },
        paused: true,
      });

      // Add animations to the timeline
      t1.current
        .to(["#container", "#rolled-out-cup-sleeve"], { left: "30%" })
        .to(
          "#rolled-out-cup-sleeve",
          {
            left: "10%",
            translateX: "30%",
            width: "57%",
          },
          1,
        )
        .to("#form", {
          opacity: 1,
          right: "20%",
        });
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
          className="absolute left-6 top-[53%] h-[30vh] w-[300px] origin-top translate-y-[-50%] rounded-md bg-primary"
        ></div>
      </div>

      <div
        id="rolled-out-cup-sleeve"
        ref={rollOutCupSleeveRef}
        className="absolute left-[50%] top-[53%] h-[30vh] w-[30px] origin-left translate-y-[-50%] rounded-md bg-primary"
      ></div>

      <div
        id="form"
        ref={formRef}
        className="absolute right-[30%] top-[53%] translate-y-[-50%] bg-transparent opacity-0"
      >
        <div className="grid h-[200px] max-w-md justify-items-end gap-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 bg-transparent px-4 py-2 text-white outline-none focus:border-accent focus:ring-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 bg-transparent px-4 py-2 text-white outline-none focus:border-accent focus:ring-0"
            />
          </div>
          <textarea
            placeholder="Your message"
            rows="4"
            className="w-full resize-none border-b border-gray-300 bg-transparent px-4 py-2 text-white outline-none focus:border-accent focus:ring-0"
          ></textarea>
          <button className="w-fit rounded-md bg-secondary px-4 py-2 text-black outline-none">
            Submit
          </button>
        </div>
      </div>

      {!cupSleeveOpen && (
        <button
          id="button"
          onClick={() => {
            t1.current.play();
            setCupSleeveOpen(true);
          }}
          className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-white px-4 py-1 font-primary text-xl text-white hover:bg-primary"
        >
          Contact Us
        </button>
      )}
    </section>
  );
};

export default Contact;
