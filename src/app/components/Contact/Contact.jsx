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
        1
      );
    });

    // Cleanup the context on unmount
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative h-[60vh] m-20">
      <div
        id="container"
        ref={containerRef}
        className="absolute top-0 left-[50%] translate-x-[-50%]"
      >
        <div id="cup" ref={cupRef} className="relative w-[350px] h-[60vh]">
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
          className="absolute top-[53%] origin-top translate-y-[-50%] left-6 w-[300px] h-[30vh] rounded-md bg-accent"
        ></div>
      </div>

      <div
        id="rolled-out-cup-sleeve"
        ref={rollOutCupSleeveRef}
        className="absolute top-[53%] origin-left translate-y-[-50%] left-[50%] rounded-md w-[30px] h-[30vh] bg-accent"
      ></div>
    </section>
  );
};

export default Contact;
