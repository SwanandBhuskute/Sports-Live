import React from "react";
import { createBrowserRouter, Navigate} from "react-router-dom";
// import ArticleList from "../pages/articles/ArticleList";
// import MatchList from "../pages/matches/MatchList";
// import TeamandSportList from "../pages/teamAndSports/TeamandSportList"
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import ErrorBoundary from "../components/ErrorBoundary";

const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/home" replace /> },
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
        path: '/home',
        element: 
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
    },
    // ErrorBoundary: () => <>Failed to load the page</>,
]);

export default router;