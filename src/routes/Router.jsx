import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/authPages/Register";
import Login from "../pages/authPages/Login";
import PrivateRoute from "./PrivateRoute";
import MyQueries from "../pages/queryPages/MyQueries";
import AddQuery from "../pages/queryPages/AddQuery";
import QueryDetails from "../pages/queryPages/QueryDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: 'my-queries',
                element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
            },
            {
                path: 'add-query',
                element:<PrivateRoute><AddQuery></AddQuery></PrivateRoute>
            },
            {
                path: 'query-details/:id',
                element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>
            }
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