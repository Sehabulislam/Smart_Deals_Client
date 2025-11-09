import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element : <Home></Home>
        },
         {
            path: "/register",
            element : <Register></Register>
        },
         {
            path: "/login",
            element : <Login></Login>
        },
    ]
  },
]);