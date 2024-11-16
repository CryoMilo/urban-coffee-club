import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ContactMobile from "./components/Contact/ContactMobile";
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
      <div className="hidden md:block">
        <Contact />
      </div>
      <div className="block md:hidden">
        <ContactMobile />
      </div>
    </main>
  );
}
