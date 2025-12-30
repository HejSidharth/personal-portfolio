import { Link } from "react-router-dom";
import { MoreHorizontal } from "lucide-react";

import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "./ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ROUTES } from "@/config/constants";

// Tech stack logo imports
import ReactLogo from "@/assets/react.svg";
import TailwindLogo from "@/assets/tailwindcss.svg";
import SupabaseLogo from "@/assets/supabase-logo-icon.svg";
import AppwriteLogo from "@/assets/appwrite.svg";
import ClerkLogo from "@/assets/clerk.ico";
import TypescriptLogo from "@/assets/typescript.png";
import OpenAILogo from "@/assets/openai-icon.svg";
import FlaskLogo from "@/assets/pocoo_flask-icon.svg";
import SolidLogo from "@/assets/solidjs.png";
import SCSSLogo from "@/assets/scss.png";
import FigmaLogo from "@/assets/figma.ico";
import ChakraLogo from "@/assets/Chakra.png";
import NextjsLogo from "@/assets/nextjs.svg";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  stack?: string[];
};

interface TechStackDictionary {
  [key: string]: { name: string; img: string };
}

const techStackDictionary: TechStackDictionary = {
  React: { name: "React", img: ReactLogo },
  Tailwind: { name: "Tailwind", img: TailwindLogo },
  Supabase: { name: "Supabase", img: SupabaseLogo },
  Appwrite: { name: "Appwrite", img: AppwriteLogo },
  Clerk: { name: "Clerk", img: ClerkLogo },
  Typescript: { name: "Typescript", img: TypescriptLogo },
  OpenAI: { name: "OpenAI", img: OpenAILogo },
  Flask: { name: "Flask", img: FlaskLogo },
  Solid: { name: "Solid", img: SolidLogo },
  SCSS: { name: "SCSS", img: SCSSLogo },
  Figma: { name: "Figma", img: FigmaLogo },
  Chakra: { name: "Chakra", img: ChakraLogo },
  "Next.js": { name: "Next.js", img: NextjsLogo },
};

const CustomCard: React.FC<CardProps> = ({
  title,
  description,
  href,
  stack,
}) => {
  const card = (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-base inline-flex ">
          <span className="border-b-2 hover:border-yellow-500">{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex gap-2 items-center">
          {stack &&
            stack.map((tech, index) => {
              const techStackItem = techStackDictionary[tech];
              if (!techStackItem) return null;

              return (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="">
                        <img
                          className="h-4 w-4 grayscale hover:grayscale-0 hover:rotate-6"
                          src={techStackItem.img}
                          alt={techStackItem.name}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{techStackItem.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          {stack && stack.length !== 0 && (
            <div className="border rounded-2xl grayscale p-1">
              <MoreHorizontal className="w-2 h-2" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const isExternalLink =
    href && (href.startsWith("http://") || href.startsWith("https://"));

  return href ? (
    isExternalLink ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full h-full"
      >
        <div className="w-full h-full">{card}</div>
      </a>
    ) : (
      <Link to={href} className="flex w-full h-full">
        <div className="w-full h-full">{card}</div>
      </Link>
    )
  ) : (
    <div className="w-full h-full">{card}</div>
  );
};

export default CustomCard;

export function StudentQueueCard() {
  return (
    <CustomCard
      title="Student Queue"
      description="A website created to queue students during tutoring classes."
      href={ROUTES.projectsStudentQueue}
      stack={["React", "Tailwind", "Supabase", "Clerk"]}
    />
  );
}

export function TrackalackCard() {
  return (
    <CustomCard
      title="Trackalack"
      description="A website created to track homework assignments for fellow students"
      href={ROUTES.projectsTrackalack}
      stack={["React", "Clerk", "Tailwind", "Supabase"]}
    />
  );
}

export function NotemonCard() {
  return (
    <CustomCard
      title="Notemon"
      description="A website created to save code snippets for later use"
      href={ROUTES.projectsNotemon}
      stack={["React", "Clerk", "Tailwind", "Appwrite"]}
    />
  );
}

export function TaskmonCard() {
  return (
    <CustomCard
      title="Taskmon"
      description="A website created to store tasks with productivity and aesthetics"
      href={ROUTES.projectsTaskmon}
      stack={["React", "Clerk", "Tailwind", "Appwrite"]}
    />
  );
}

export function AIWeatherCard() {
  return (
    <CustomCard
      title="AI Weather App"
      description="An AI weather app that recommends what to wear given the weather"
      href="https://github.com/HejSidharth/HonestWeather"
      stack={["OpenAI"]}
    />
  );
}

export function ParaillelCard() {
  return (
    <CustomCard
      title="Paraillel"
      description="SWE internship where I was responsible for optimizing the user flow"
      href="https://paraillel.com/"
      stack={[]}
    />
  );
}

export function GeicoCard() {
  return (
    <CustomCard
      title="GEICO"
      description="Software Engineering Intern at Geico | Database Management"
      href="https://geico.com/"
      stack={[]}
    />
  );
}

export function OpenAQCard() {
  return (
    <CustomCard
      title="OpenAQ"
      description="Worked on a project designing and developing an AQI education tool"
      href="https://openaq.org/"
      stack={["Solid", "SCSS", "Figma"]}
    />
  );
}

export function InclusiveStemCard() {
  return (
    <CustomCard
      title="Inclusive STEM"
      description="Worked on a project designing and developing an inclusive library"
      href="https://www.inclusivestem.org/"
      stack={["Typescript", "React", "Chakra"]}
    />
  );
}

export function TeamPayCard() {
  return (
    <CustomCard
      title="Team Pay"
      description="Worked on a SAAS that helped business owners track pay"
      href={ROUTES.projectsTeamPay}
      stack={["Typescript", "React", "Supabase", "Tailwind"]}
    />
  );
}

export function FacesCard() {
  return (
    <CustomCard
      title="Faces"
      description="A website to help people use avatars for their projects"
      href="https://faces.hejamadi.com"
      stack={["React", "Appwrite", "Typescript", "Tailwind"]}
    />
  );
}

export function ChordsCard() {
  return (
    <CustomCard
      title="Chords"
      description="A simple website for me and others to remember some chords"
      href="https://chords.hejamadi.com"
      stack={[]}
    />
  );
}
