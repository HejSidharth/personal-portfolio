import BackButton from "@/components/back-button";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";
import ProjectItem from "@/components/ProjectItem";
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
          <div className="flex flex-col gap-0 mb-10">
            <ProjectItem
              title="Team Pay"
              subtitle="SaaS Platform"
              description="Worked on a SAAS that helped business owners track pay"
              href={ROUTES.projectsTeamPay}
            />
            <ProjectItem
              title="Trackalack"
              subtitle="Productivity App"
              description="A website created to track homework assignments for fellow students"
              href={ROUTES.projectsTrackalack}
            />
            <ProjectItem
              title="Notemon"
              subtitle="Code Snippet Saver"
              description="A website created to save code snippets for later use"
              href={ROUTES.projectsNotemon}
            />
            <ProjectItem
              title="Taskmon"
              subtitle="Task Manager"
              description="A website created to store tasks with productivity and aesthetics"
              href={ROUTES.projectsTaskmon}
            />
            <ProjectItem
              title="AI Weather App"
              subtitle="AI Tool"
              description="An AI weather app that recommends what to wear given the weather"
              href="https://github.com/HejSidharth/HonestWeather"
            />
            <ProjectItem
              title="Inclusive STEM"
              subtitle="Library Tool"
              description="Worked on a project designing and developing an inclusive library"
              href="https://www.inclusivestem.org/"
            />
            <ProjectItem
              title="OpenAQ"
              subtitle="AQI Education"
              description="Worked on a project designing and developing an AQI education tool"
              href="https://openaq.org/"
            />
          </div>
        </div>
      </PageContainer>
    </>
  );
}
