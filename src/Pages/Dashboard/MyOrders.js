import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = [], isLoading, error } = useQuery({
        queryKey: 'bookings',
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
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
    return (
        <div>
            <h1 style={{ textShadow: '1px 1px  #CBD28F' }} className='text-center text-3xl font-bold text-primary my-12'>My Orders</h1>

            <div className="overflow-x-auto">
                <table className="table text-center">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings.map((booking, i) =>
                                <tr >
                                    <th>{i + 1}.</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={booking.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>{booking.mobileName}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.place}</td>
                                    
                                    <td>
                                    {
                                        !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-xs btn-primary'>Pay</button></Link>
                                    }
                                    {
                                        booking.paid && <span className='text-xs text-green-500'>Paid</span>
                                    }
                                    </td>
                                </tr>
                            )


                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;
