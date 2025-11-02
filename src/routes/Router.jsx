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
import UpdateQuery from "../pages/queryPages/UpdateQuery";
import AllQueries from "../pages/queryPages/AllQueries";
import MyRecommendations from "../pages/queryPages/MyRecommendations";
import RecommendationsForMe from "../pages/queryPages/RecommendationsForMe";
import ErrorPage from "../pages/ErrorPage";
import AboutUs from "../pages/AboutUs";
import RecommendationDetails from "../pages/RecommendationDetails";
import AllUserRecommendations from "../components/AllUserRecommendations";

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
                path: 'queries',
                Component: AllQueries
            },
            {
                path:'all-user-recommendations',
                Component: AllUserRecommendations
            },
            {
                path:'about-us',
                Component: AboutUs
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
            },
            {
                path: 'update-query/:id',
                element: <PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>
            },
            {
                path: 'my-recommendations',
                element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
            },
            {
                path: 'recommendation-for-me',
                element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe></PrivateRoute>
            },
            {
                path: "/recommendations/:id",
                element: <PrivateRoute><RecommendationDetails></RecommendationDetails></PrivateRoute>
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
    },
    {
        path: '*',
        Component: ErrorPage
    }
])