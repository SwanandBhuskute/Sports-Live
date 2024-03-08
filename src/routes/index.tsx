import React from "react";
import { createBrowserRouter, Navigate} from "react-router-dom";
import ArticleList from "../pages/articles/ArticleList";
// import MatchList from "../pages/matches/MatchList";
// import TeamandSportList from "../pages/teamAndSports/TeamandSportList"
import Signin from "../pages/signin/index";
import Signup from "../pages/signup/index";
import Logout from "../pages/logout";
import Home from "../pages/Home";
// @ts-ignore
import ProtectedRoute from "./ProtectedRoute";
// import ErrorBoundary from "../components/ErrorBoundary";
import MatchList from "../pages/matches/MatchList";
// import SportList from "../pages/teamAndSports/SportList";
import TeamAndSportList from "../pages/teamAndSports/TeamandSportList";

const router = createBrowserRouter([
    { path: '/', element: <Navigate to='/home' replace /> },
    {
      path: '/signin', 
      element: <Signin />
    },
    {
      path: '/signup', 
      element: <Signup />
    },
    { 
      path: '/logout', 
      element: <Logout /> 
    },
    {
      path: '/home',
      element: 
          <ProtectedRoute>
              <Home />
          </ProtectedRoute>
    },
    // ErrorBoundary: () => <>Failed to load the page</>,
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
]);

export default router;