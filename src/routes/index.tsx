import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ArticleList from "../pages/articles/ArticleList";
import Signin from "../pages/signin/index";
import Signup from "../pages/signup/index";
import Logout from "../pages/logout";
import Home from "../pages/Home";
import MatchList from "../pages/matches/MatchList";
import TeamAndSportList from "../pages/teamAndSports/TeamandSportList";
import NotFound from "../pages/NotFound";

// Function to check if the user is logged in
const isLoggedIn = () => {
  const authToken = localStorage.getItem("authToken");
  return !!authToken;
};

// Function to render the Home component conditionally
const renderHomeComponent = () => {
  return isLoggedIn() ? <Navigate to="/home" replace /> : <Home />;
};

const router = createBrowserRouter([
  { path: "/", element: renderHomeComponent() },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/logout", element: <Logout /> },
  { path: "/home", element: <Home /> }, // No ProtectedRoute here
  { path: '/articles', element: <ArticleList /> }, // No ProtectedRoute here
  { path: '/matches', element: <MatchList /> }, // No ProtectedRoute here
  { path: '/teams', element: <TeamAndSportList /> }, // No ProtectedRoute here
  { path: "*", element: <NotFound /> },
]);

export default router;
