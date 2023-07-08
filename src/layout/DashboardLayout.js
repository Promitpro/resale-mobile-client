import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';




const DashboardLayout = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content font-semibold ">

                        <li className='hover:bg-secondary'><Link to='/dashboard'>My Orders</Link></li>

                        <>
                            <li className='hover:bg-secondary'><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                            <li className='hover:bg-secondary'><Link to='/dashboard/myProducts'>My Products</Link></li>
                            <li className='hover:bg-secondary'><Link to='/dashboard/allSellers'>All Sellers</Link></li>
                            <li className='hover:bg-secondary'><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                            <li className='hover:bg-secondary'><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                        </>

                    </ul>

                </div>
            </div>


            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;