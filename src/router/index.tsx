import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom";
import { routeConfig } from "./routes";
import { wrapSuspense } from "./helper";
import BasicLayout from "../layout";

const routes: RouteObject[] = [
  {
    path: "login",
    element: wrapSuspense(() => import("../pages/login")),
  },
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      ...routeConfig,
    ],
  },
  {
    path: "*",
    element: wrapSuspense(() => import("../pages/not-found")),
  },
];

export const router = createBrowserRouter(routes, {
  basename: "/",
});
