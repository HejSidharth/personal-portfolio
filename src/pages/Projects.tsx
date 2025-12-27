import {
  AIWeatherCard,
  NotemonCard,
  TaskmonCard,
  TeamPayCard,
  TrackalackCard,
} from "@/components/project-card";
import BackButton from "@/components/back-button";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";
import { ROUTES } from "@/config/constants";

export default function Projects() {
  return (
    <>
      <BackButton title="Home" href={ROUTES.home} />
      <PageContainer>
        <div className="flex gap-4 flex-col">
          <div>
            <button className="font-bold border-b-2 text-lg hover:border-yellow-500 inline-block font-inter">
              My Projects
            </button>
          </div>
          <div>
            <p className="font-inter text-base">
              These are some of the projects I have made when bored, or when I
              have faced an annoying problem that I needed a quick fix for :)
            </p>
          </div>
          <SectionHeader>Project List</SectionHeader>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 mb-10">
            <TeamPayCard />
            <TrackalackCard />
            <NotemonCard />
            <TaskmonCard />
            <AIWeatherCard />
          </div>
        </div>
      </PageContainer>
    </>
  );
}
