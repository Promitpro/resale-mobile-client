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
                                    bookings.map((booking,i) =>
                                        <tr >
                                            <th>{i+1}.</th>
                                            <td>{booking.mobileName}</td>
                                            <td>{booking.price}</td>
                                            <td>{booking.place}</td>
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
