import React from 'react';
import HomePage from "./pages/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/services'} element={<ServicesPage />} />
            <Route path={'/projects'} element={<ProjectsPage />} />
        </Routes>
    );
};

export default App;