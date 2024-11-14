"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Contact = () => {
  const cupRef = useRef(null);
  const cupSleeveRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({ defaults: { stagger: 0.5 } });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section>
      <div id="cup" ref={cupRef} className="w-[400px] h-[500px]">
        <Image
          src="/assets/contact/coffee-cup-cropped.jpg"
          alt="coffee-cup"
          quality={100}
          fill
        />
      </div>

      <div className="min-w-[300px] w-[340px] h-[76vh]">
        <div
          id="cup-sleeve"
          ref={cupSleeveRef}
          className="absolute top-[50%] rounded-md translate-y-[-50%] w-full h-[42%] bg-black"
          style={{
            clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%);",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Contact;
