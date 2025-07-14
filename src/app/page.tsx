import Image from "next/image";
import HeroPage from "./hero/page";
import ExpertisePage from "./expertise/page";
import ChoosePage from "./choose/page";
import AboutPage from "./about/Page";
import ProjectPage from "./project/page";

export default function Home() {
  return (
    <div className='w-full h-auto overflow-hidden'>
      <HeroPage/>
      <ExpertisePage/>
      <ChoosePage/>
      <AboutPage/>
      <ProjectPage/>
    </div>
  );
}
