import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { EducationAwards } from "./components/education-awards";
import { Certifications } from "./components/certifications";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="about" className="flex-1">
        <Hero />
        <EducationAwards />
        <Certifications />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
