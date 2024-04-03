// pages
import Scan from "./pages/Scan.tsx";
import Home from "./pages/Home.tsx";

import { FC } from "react";
import Leaderboard from './pages/Leaderboard.tsx';

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
        key: "scan-route",
        title: "Scan",
        path: "/scan",
        enabled: true,
        component: Scan,
    },
  {
    key: "leaderboard",
    title: "",
    path: "/leaderboard",
    enabled: true,
    component: Leaderboard,
    hideFromHeader: false,
  },
];
