import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

import {
  NotemonCard,
  TeamPayCard,
  TrackalackCard,
} from "@/components/project-card";
import PageContainer from "@/components/PageContainer";
import ExperienceItem from "@/components/ExperienceItem";
import { SITE_CONFIG, ROUTES } from "@/config/constants";
import profileImage from "@/assets/my-notion-face-transparent.png";
import profileImageHover from "@/assets/my-notion-face-transparent (1).png";
import whatnotLogo from "@/assets/logos/whatnot.png";
import geicoLogo from "@/assets/logos/geico.png";
import codeYourDreamsLogo from "@/assets/logos/codeyourdreams.png";
import foodRecoveryLogo from "@/assets/cropped-FoodRecovery_AppleLogo_ColorUpdates-COLOR-NOTEXT.png";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <PageContainer>
        <div className="flex flex-col gap-3 py-8 max-w-2xl mx-auto ">
          {/* Header Section */}
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1">
              <button className="font-bold border-b-2 text-lg hover:border-yellow-500 inline-block font-inter mb-4">
                {SITE_CONFIG.name}
              </button>
              <div className="mt-4">
                <p className="font-inter text-base">
                  <span className="italic font-newsreader hover:text-yellow-500 cursor-pointer">
                    {SITE_CONFIG.description}
                  </span>{" "}
                  This is what I do. I am {SITE_CONFIG.name}. I'm a junior at
                  the{" "}
                  <span className="italic font-newsreader hover:text-[#FF5F05] underline cursor-pointer">
                    {SITE_CONFIG.university}
                  </span>{" "}
                  studying {SITE_CONFIG.major}.
                </p>
                <p className="font-inter text-sm text-muted-foreground mt-4">
                  Contact me at:{" "}
                  <a
                    href="mailto:hejamadisidharth@gmail.com"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    hejamadisidharth [at] gmail [dot] com
                  </a>
                </p>
              </div>
            </div>
            {/* Profile Picture */}
            <div className="hidden sm:block flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-muted border-2 border-border flex items-center justify-center overflow-hidden relative group">
                <img
                  src={profileImage}
                  alt={SITE_CONFIG.name}
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                />
                <img
                  src={profileImageHover}
                  alt={SITE_CONFIG.name}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* About Section */}

          {/* Work Experience Section */}
          <section>
            <button className="font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-yellow-500">
              Work Experience
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              <ExperienceItem
                company="WhatNot"
                title="Incoming SWE Intern"
                period="Summer 2026"
                href="https://www.whatnot.com"
                logo={whatnotLogo}
              />
              <ExperienceItem
                company="GEICO"
                title="Software Engineering Intern"
                period="Summer 2025"
                href="https://geico.com"
                description=""
                logo={geicoLogo}
              />
              <ExperienceItem
                company="Code Your Dreams"
                title="TPM"
                period="Spring 2025"
                href="https://codeyourdreams.org"
                description=""
                logo={codeYourDreamsLogo}
              />
              <ExperienceItem
                company="Food Recovery"
                title="TPM"
                period="Fall 2024"
                href="https://foodrecovery.org"
                logo={foodRecoveryLogo}
              />
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <Link
              to={ROUTES.projects}
              className="font-newsreader italic font-medium mt-10 border-b-2 w-max hover:border-yellow-500 flex items-center gap-2"
            >
              Featured Projects
              <MoveRight className="w-4 h-4" />
            </Link>
            <div className="flex flex-col gap-6 md:grid md:grid-cols-3 mt-4">
              <TeamPayCard />
              <TrackalackCard />
              <NotemonCard />
            </div>
          </section>
        </div>
      </PageContainer>
    </motion.div>
  );
}
