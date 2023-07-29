import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from 'react-query';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: 'bookings',
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 style={{ textShadow: '1px 1px  #CBD28F' }} className='text-center text-3xl font-bold text-primary my-12'>My Orders</h1>
            {bookings.length?
                <div className="overflow-x-auto">
                <table className="table text-center">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            bookings.map((booking, i) =>
                                <tr >
                                    <th>{i + 1}.</th>
                                    <td>{booking.mobileName}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.place}</td>
                                </tr>
                            )
                            
             
                        }
                    </tbody>
                </table>
            </div>
            :
            <p className='text-xl font-semibold text-center'>You have not order anything</p>
            }
        </div >
    );
};

export default MyOrders;
