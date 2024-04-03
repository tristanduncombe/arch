// pages
import Home from "./pages/Home.tsx";
import Courses from "./pages/Courses.tsx";
import Course from "./pages/Course.tsx";
import Exam from "./pages/Exam.tsx";
import { FC } from "react";

// interface
interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
  hideFromHeader?: boolean;
}

export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "courses-route",
    title: "Courses",
    path: "/Courses",
    enabled: true,
    component: Courses,
  },
  {
    key: "course-route",
    title: "",
    path: "/Courses/:id",
    enabled: true,
    component: Course,
    hideFromHeader: true,
  },
  {
    key: "course-assessmentitem-route",
    title: "",
    path: "/Courses/:id/AssessmentItem/:assessmentId",
    enabled: true,
    component: Exam,
    hideFromHeader: true,
  },
];