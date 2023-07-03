import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Static/Layout";
import LandingPage from "../Pages/LandingPage";

export const mainRoute = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <LandingPage/>
        }
    ]
}])