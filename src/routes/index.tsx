import React from "react";
import { createBrowserRouter, Navigate} from "react-router-dom";
import ArticleList from "../pages/articles/ArticleList";
import Signin from "../pages/signin/index";
import Signup from "../pages/signup/index";
import Logout from "../pages/logout";
import Home from "../pages/Home";
// @ts-ignore
import ProtectedRoute from "./ProtectedRoute";
import MatchList from "../pages/matches/MatchList";
import TeamAndSportList from "../pages/teamAndSports/TeamandSportList";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/home",
    element: 
      <ProtectedRoute>
          <Home />
      </ProtectedRoute>
  },
  {
    path: '/articles',
    element: (
      <ProtectedRoute>
        <ArticleList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/matches',
    element: (
      <ProtectedRoute>
        <MatchList />
      </ProtectedRoute>
    ),
  },
  {
    path: '/teams',
    element: (
      <ProtectedRoute>
        <TeamAndSportList />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

export default router;