import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: '/about',
                element: <AboutPage />,
            },
            {
                path: '/services',
                element: <ServicesPage />,
            },
            {
                path: '/projects',
                element: <ProjectsPage />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
                children: [
                    {
                        path: ':id',
                        element: <ProfilePage />,
                    }
                ]
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
