import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const Hero = () => {
  return (
    <section className="relative h-[80vh] xl:h-screen text-center">
      <div className="bg-black z-10 absolute w-full h-full opacity-75 pt-32 px-10">
        <div className="flex gap-5 flex-col items-center">
          <Badge containerStyles="hidden md:flex w-40 h-40" />
          <h1 className="h1 uppercase md:normal-case">
            Urban <span className="text-light">Coffee</span>
          </h1>
          <Separator />
          <p className="text-secondary font-secondary">
            Start your busy day with a cup of our freshly brewed coffee
          </p>
          <a
            href="#"
            className="bg-accent uppercase text-white px-8 py-3 mt-12 hover:bg-secondary hover:text-black transition-all duration-500"
          >
            Explore
          </a>
        </div>
      </div>

      <video
        className="object-cover absolute top-0 left-0 w-full h-full opacity-20"
        autoPlay
        loop
        muted
        src="/assets/hero/urban-coffee-club-hero.mp4"
      ></video>
    </section>
  );
};

export default Hero;
