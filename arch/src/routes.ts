// pages
import Home from "./pages/Home.tsx";

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
];
