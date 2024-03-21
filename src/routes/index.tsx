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
import UserDetails from "../pages/UserDetails";

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
  { path: "/user", element: <UserDetails />},
  { path: "/home", element: <Home /> },
  { path: '/articles', element: <ArticleList /> },
  { path: '/matches', element: <MatchList /> },
  { path: '/teams', element: <TeamAndSportList /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
