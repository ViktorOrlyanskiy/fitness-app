import React from 'react';
import { Routes, Route } from "react-router-dom";
import { privateRoutes } from '../../router'

export const AppRoutes = () => {
    return (
        <Routes>
            {privateRoutes.map(route =>
                <Route key={route.path} path={route.path} element={route.element} />
            )}
        </Routes>
    )
}