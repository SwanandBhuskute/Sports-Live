import { createBrowserRouter, Navigate } from "react-router-dom";
import Articles from "../pages/articles/index";
import Signin from "../pages/signin/index";
import Signup from "../pages/signup/index";
import Logout from "../pages/logout";
import Home from "../pages/Home";
import Matches from "../pages/matches/index";
import TeamandSport from "../pages/teamAndSports/index";
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
  { path: '/articles', element: <Articles /> },
  { path: '/matches', element: <Matches /> },
  { path: '/teams', element: <TeamandSport /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
