import { PortfolioPage } from "../components/portfolio-page";
import { content } from "../data/content";

export default function Home() {
  return <PortfolioPage content={content.en} />;
}
