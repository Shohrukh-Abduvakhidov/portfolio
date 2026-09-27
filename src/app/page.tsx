import Hero from "@/components/sections/hero";
import TechStrip from "@/components/sections/tech-strip";
import SelectedWork from "@/components/sections/selected-work";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <SelectedWork />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
