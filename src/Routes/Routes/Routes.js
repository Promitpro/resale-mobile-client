import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signin from "../../Pages/Login/Signin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


import DisplayBrands from "../../Pages/DisplayBrands/DisplayBrands";


import DashboardLayout from "../../layout/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Allusers from "../../Pages/Dashboard/Allusers/Allusers";
import Allsellers from "../../Pages/Dashboard/Allusers/Allsellers";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/displayBrand/:id',
                element: <DisplayBrands></DisplayBrands>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            
        ]
    },
    {
        path: '/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allbuyers',
                element: <Allusers></Allusers>
            },
            {
                path: '/dashboard/allsellers',
                element: <Allsellers></Allsellers>
            },

        ]
    }

])