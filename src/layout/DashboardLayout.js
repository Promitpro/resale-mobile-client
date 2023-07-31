import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { useQuery } from 'react-query';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext);

    const { data: users = [], isLoading, error } = useQuery({
        queryKey: 'users',
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`);
            const data = await res.json();
            
            return data;
        }
    })
    if(isLoading){
        return <progress className="progress w-56 left-1/3 ml-0 lg:ml-28"></progress>
    }
    if(error)
    {
        return <div>Error: {error.message}</div>
    }

    const isUser = users[0].userType === 'user';
    const isSeller = users[0].userType === 'seller';



    return (
        <div>
            <Navbar />

            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content font-semibold ">
                        
                        <li className="hover:bg-secondary">
                            <Link to="/dashboard"></Link>
                        </li>

                        
                         {isUser && (
                             <>
                                <li className="hover:bg-secondary">
                                    <Link to="/dashboard/myOrder">My Orders</Link>
                                </li>                                
                            </>
                        )} 

                        
                        {isSeller && ( 
                            <>
                                <li className="hover:bg-secondary">
                                    <Link to="/dashboard/addProduct">Add a Product</Link>
                                </li>
                                <li className="hover:bg-secondary">
                                    <Link to="/dashboard/myProducts">My Products</Link>
                                </li>
                                <li className="hover:bg-secondary">
                                    <Link to="/dashboard/allsellers">All Sellers</Link>
                                </li>
                                <li className="hover:bg-secondary">
                                    <Link to="/dashboard/allbuyers">All Buyers</Link>
                                </li>
                                <li className="hover:bg-secondary">
                                    <Link to="/dashboard/reportedItems">Reported Items</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
