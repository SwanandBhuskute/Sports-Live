// @ts-ignore
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";

const Signin = React.lazy(() => import("../pages/signin/index"));
const Signup = React.lazy(() => import("../pages/signup/index"));
const Logout = React.lazy(() => import("../pages/logout"));
const Articles = React.lazy(() => import("../pages/articles/index"));
const Matches = React.lazy(() => import("../pages/matches/index"));
const TeamandSport = React.lazy(() => import("../pages/teamAndSports/index"));
const Home = React.lazy(() => import("../pages/Home"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const UserDetails = React.lazy(() => import("../pages/UserDetails"));

// import Articles from "../pages/articles/index";
// import Signin from "../pages/signin/index";
// import Signup from "../pages/signup/index";
// import Logout from "../pages/logout";
// import Home from "../pages/Home";
// import Matches from "../pages/matches/index";
// import TeamandSport from "../pages/teamAndSports/index";
// import NotFound from "../pages/NotFound";
// import UserDetails from "../pages/UserDetails";

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
  { path: "/signin", element: <Signin />  },
  { path: "/signup", element: <Signup /> },
  { path: "/logout", element: <Logout /> },
  { path: "/user", element: <UserDetails />},
  { path: "/home", element: <Home /> },
  { path: '/articles', element: <Articles /> },
  { path: '/matches', element: <Matches /> },
  { path: '/teams', element: <TeamandSport /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
