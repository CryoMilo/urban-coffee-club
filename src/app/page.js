import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";

export default function Home() {
  return (
    <main>
      <Hero />
      <Explore />
      <Menu />
      <About />
    </main>
  );
}
