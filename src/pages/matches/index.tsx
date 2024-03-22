import React, { Suspense } from "react";
const MatchList = React.lazy(() => import("./MatchList"));
import ErrorBoundary from "../../components/ErrorBoundary";
import { Outlet } from "react-router-dom";


const Matches: React.FC = () => {
    return (
        <>
            <ErrorBoundary>
                <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
                    <MatchList />
                </Suspense>
            </ErrorBoundary>
            <Outlet/>
        </>
    )
};

export default Matches;