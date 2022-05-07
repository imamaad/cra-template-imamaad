import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {DashboardPage} from "features/dashboard";

export const ManageRoutes = () => {
    return (
        <Routes>
            <Route index element={<DashboardPage/>}/>
            <Route index element={<AboutMePage/>}/>
        </Routes>
    );
}