import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signin from "../../Pages/Login/Signin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Display from "../../Pages/Display/Display";

import DisplayBrands from "../../Pages/DisplayBrands/DisplayBrands";
import AddProducts from "../../Pages/AddProduct/AddProducts";
import MyProducts from "../../Pages/MyProducts/MyProducts";


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
            {
                path: '/addProduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/myProducts',
                element: <MyProducts></MyProducts>
            }
        ]
    },
    {
        path: '/display',
        element:<Display></Display>
    }

])