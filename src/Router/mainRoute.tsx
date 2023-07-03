import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Static/Layout";
import HomeScreen from "../Pages/HomeScreen";
import InputScreen from "../Pages/InputScreen";


export const mainRoute = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <HomeScreen/>
        },{
            path: "/Input",
            element: <InputScreen/>
        }
    ]
}])