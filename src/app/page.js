import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Explore />
      <About />
    </main>
  );
}
