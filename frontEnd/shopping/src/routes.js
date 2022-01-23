import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Avaliacoes from './Pages/avaliacoes';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/avaliacoes"
                element={<Avaliacoes />}
            />
        </Routes>
    )
}

export default MainRoutes;
