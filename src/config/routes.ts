/**
 * Route configuration for the application
 */

import { ComponentType } from "react";
import { ROUTES } from "./constants";

import HomePage from "@/pages/HomePage";
import Projects from "@/pages/Projects";
import StudentQueue from "@/pages/projects/StudentQueue";
import Notemon from "@/pages/projects/Notemon";
import Trackalack from "@/pages/projects/Trackalack";
import Taskmon from "@/pages/projects/Taskmon";
import TeamPay from "@/pages/projects/TeamPay";
import NotFound from "@/pages/NotFound";

export interface RouteConfig {
  path: string;
  component: ComponentType;
}

export const routeConfigs: RouteConfig[] = [
  {
    path: ROUTES.home,
    component: HomePage,
  },
  {
    path: ROUTES.projects,
    component: Projects,
  },
  {
    path: ROUTES.projectsStudentQueue,
    component: StudentQueue,
  },
  {
    path: ROUTES.projectsNotemon,
    component: Notemon,
  },
  {
    path: ROUTES.projectsTrackalack,
    component: Trackalack,
  },
  {
    path: ROUTES.projectsTaskmon,
    component: Taskmon,
  },
  {
    path: ROUTES.projectsTeamPay,
    component: TeamPay,
  },
];

export const notFoundRoute: RouteConfig = {
  path: "*",
  component: NotFound,
};

