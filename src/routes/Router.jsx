import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/authPages/Register";
import Login from "../pages/authPages/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index: true,
                Component: Home
            },
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path:'register',
                Component: Register
            },
            {
                path: 'login',
                Component: Login
            }
        ]
    }
])