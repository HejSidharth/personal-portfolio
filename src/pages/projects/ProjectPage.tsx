import React from "react";
import { Github, AppWindow } from "lucide-react";

import BackButton from "@/components/back-button";
import PageContainer from "@/components/PageContainer";
import SectionHeader from "@/components/SectionHeader";
import SocialLink from "@/components/SocialLink";
import StackCard from "@/components/stack-card";
import { CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ROUTES } from "@/config/constants";

interface TechStackItem {
  title: string;
  href: string;
  description: string;
  image: string;
}

interface ProjectPageProps {
  title: string;
  description: string;
  images: string[];
  techStack: TechStackItem[];
  githubLink?: string;
  websiteLink?: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  description,
  images,
  techStack,
  githubLink,
  websiteLink,
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);



  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <BackButton title="Projects" href={ROUTES.projects} />
      <PageContainer>
        <div className="flex gap-4 flex-col">
          <div className="flex justify-between items-center">
            <button className="font-bold border-b-2 text-lg hover:border-yellow-500 inline-block font-inter">
              {title}
            </button>
            <div className="flex gap-4">
              {websiteLink && (
                <SocialLink
                  icon={AppWindow}
                  href={websiteLink}
                  label="Visit Website"
                  iconClassName="hover:text-yellow-500"
                />
              )}
              {githubLink && (
                <SocialLink
                  icon={Github}
                  href={githubLink}
                  label="GitHub"
                  iconClassName="hover:text-yellow-500"
                />
              )}
            </div>
          </div>
          <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                className="rounded-md border-2 shadow-lg"
                src={image}
                alt={`${title} image`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="sm:flex hidden" />
        <CarouselNext className="sm:flex hidden" />
      </Carousel>
          <div className="text-center text-sm text-muted-foreground">
            {current} of {count}
          </div>
          <div>
            <CardDescription className="font-inter text-base pl-1 leading-7">
              {description}
            </CardDescription>
          </div>
          <SectionHeader>Tech Stack</SectionHeader>
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 mb-10">
            {techStack.map((tech, index) => (
              <StackCard
                key={index}
                title={tech.title}
                href={tech.href}
                description={tech.description}
                image={tech.image}
              />
            ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default ProjectPage;
