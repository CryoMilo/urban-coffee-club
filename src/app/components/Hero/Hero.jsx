import Badge from "./Badge";
import Music from "./Music";
import Separator from "./Separator";

const Hero = () => {
  return (
    <section className="xxl:h-[40vh] relative h-[80vh] text-center xl:h-screen">
      <div className="absolute z-10 grid h-full w-full bg-black px-10 pt-32 opacity-80 xl:place-content-center">
        <div className="flex flex-col items-center gap-5">
          <Badge containerStyles="hidden md:flex w-40 h-40" />
          <h1 className="h1 uppercase md:normal-case">
            Urban <span className="text-light">Coffee</span>
          </h1>
          <Separator />
          <p className="font-secondary text-secondary">
            Start your busy day with a cup of our freshly brewed coffee
          </p>
          <a
            href="#"
            className="mt-12 bg-accent px-8 py-3 uppercase text-white transition-all duration-500 hover:bg-secondary hover:text-black"
          >
            Explore
          </a>
        </div>
      </div>

      <video
        className="absolute left-0 top-0 h-full w-full object-cover opacity-80"
        autoPlay
        loop
        muted
        src="/assets/hero/urban-coffee-club-hero.mp4"
      ></video>

      <Music />
    </section>
  );
};

export default Hero;
