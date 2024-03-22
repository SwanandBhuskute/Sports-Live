import React, { Suspense } from "react";
const TeamandSportList = React.lazy(() => import("./TeamandSportList"));
import ErrorBoundary from "../../components/ErrorBoundary";
import { Outlet } from "react-router-dom";


const TeamandSport: React.FC = () => {
    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
                    <TeamandSportList />
                </Suspense>
            </ErrorBoundary>
            <Outlet/>
        </>
    )
};

export default TeamandSport;