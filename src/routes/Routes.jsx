import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductsDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import MyProducts from "../pages/MyProducts";
import MyBids from "../pages/MyBids";
import AddProduct from "../pages/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allProducts",
        element: <Products></Products>,
      },
      {
        path: "/myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/myBids",
        element: <MyBids></MyBids>,
      },
      {
        path: "/createProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductsDetails></ProductsDetails>,
      },
    ],
  },
]);
