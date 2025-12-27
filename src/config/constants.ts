/**
 * Site-wide constants and configuration values
 */

export const SITE_CONFIG = {
  name: "Sidharth Rao Hejamadi",
  title: "Sidharth Hejamadi - Portfolio",
  description: "Coding, designing, and building.",
  university: "University of Illinois at Urbana-Champaign",
  major: "Computer Science and Statistics",
} as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/HejSidharth",
  linkedin: "https://www.linkedin.com/in/sidharth-hejamadi",
} as const;

export const ROUTES = {
  home: "/",
  projects: "/projects",
  projectsStudentQueue: "/projects/student-queue",
  projectsNotemon: "/projects/notemon",
  projectsTrackalack: "/projects/trackalack",
  projectsTaskmon: "/projects/taskmon",
  projectsTeamPay: "/projects/team-pay",
  experience: "/experience",
} as const;
