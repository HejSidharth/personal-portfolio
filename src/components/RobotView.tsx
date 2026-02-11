import { SITE_CONFIG, SOCIAL_LINKS } from "@/config/constants";
import { useRobotMode } from "@/context/RobotModeContext";
import { X } from "lucide-react";

export default function RobotView() {
  const { toggleRobotMode } = useRobotMode();

  const markdownContent = `
# ${SITE_CONFIG.name}
> ${SITE_CONFIG.description}

## Education
- **University:** ${SITE_CONFIG.university}
- **Major:** ${SITE_CONFIG.major}

## Experience
- **WhatNot** | Incoming SWE Intern | Summer 2026
- **GEICO** | Software Engineering Intern | Summer 2025
- **Code Your Dreams** | TPM | Spring 2025
- **Food Recovery** | TPM | Fall 2024

## Links
- **GitHub:** ${SOCIAL_LINKS.github}
- **LinkedIn:** ${SOCIAL_LINKS.linkedin}
- **Email:** hejamadisidharth@gmail.com

---
*End of Transmission*
  `.trim();

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white p-8 font-mono overflow-auto selection:bg-white selection:text-black">
      <button 
        onClick={toggleRobotMode}
        className="fixed top-4 right-4 p-2 hover:bg-white hover:text-black transition-colors rounded-full"
        aria-label="Close Robot Mode"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="max-w-2xl mx-auto whitespace-pre-wrap pt-12">
        {markdownContent}
      </div>
    </div>
  );
}
