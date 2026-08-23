import type { Content } from "../data/content";
import { About } from "./about";
import { Contact } from "./contact";
import { EducationAwards } from "./education-awards";
import { Experience } from "./experience";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { Nav } from "./nav";
import { Skills } from "./skills";

/** The whole one-page portfolio, rendered from one language's content. */
export function PortfolioPage({ content }: { content: Content }) {
  return (
    <>
      <Nav content={content} />
      <main className="flex-1">
        <Hero content={content} />
        <About content={content} />
        <EducationAwards content={content} />
        <Skills content={content} />
        <Experience content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
    </>
  );
}
