"use client";

import Image from "next/image";
import menuData from "./menu.json";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Menu() {
  const coffeeContainerRef = useRef(null);
  const nonCoffeeContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        "#menu-card",
        {
          opacity: "0",
        },
        {
          opacity: "100%",
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: coffeeContainerRef.current, // Start animation when the container enters the viewport
            start: "top 80%", // Trigger when the top of the container is 80% into the viewport
            end: "bottom 20%", // End when the bottom is 20% into the viewport
            toggleActions: "play none none none", // Play the animation only once
          },
        }
      );

      gsap.fromTo(
        "#non-coffee-menu",
        {
          opacity: "0",
          y: "30px",
        },
        {
          y: 0,
          opacity: "100%",
          duration: 1,
          ease: "power1.in",
          scrollTrigger: {
            trigger: nonCoffeeContainerRef.current, // Start animation when the container enters the viewport
            start: "top 80%", // Trigger when the top of the container is 80% into the viewport
            end: "bottom 20%", // End when the bottom is 20% into the viewport
            toggleActions: "play none none none", // Play the animation only once
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="menu" className="bg-secondary">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-center text-3xl mb-6 font-primary">OUR MENU</h1>
        {/* Coffee Section */}
        <div ref={coffeeContainerRef}>
          <h2 className="text-2xl font-semibold mb-4">COFFEE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {menuData.coffee.map((item, index) => (
              <div id="menu-card" key={index} className="text-center">
                <div className="relative w-full aspect-square">
                  <Image
                    src={item.image}
                    fill
                    alt={item.name}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-medium mt-2">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Coffee Section */}
        <div id="non-coffee-menu" className="mt-12" ref={nonCoffeeContainerRef}>
          <h2 className="text-2xl font-semibold mb-4">NON - COFFEE</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2 text-center">Hot</th>
                <th className="p-2 text-center">Ice</th>
              </tr>
            </thead>
            <tbody>
              {menuData.nonCoffee.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2 text-center">
                    {item.hot ? `$${item.hot.toFixed(2)}` : "-"}
                  </td>
                  <td className="p-2 text-center">
                    {item.ice ? `$${item.ice.toFixed(2)}` : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
