import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signin from "../../Pages/Login/Signin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Display from "../../Pages/Display/Display";

import DisplayBrands from "../../Pages/DisplayBrands/DisplayBrands";


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
                loader: ({params}) => fetch(`/products.json/${params.id}`),
                
            }
        ]
    },
    {
        path: '/display',
        element:<Display></Display>
    }

])