import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const Allusers = () => {
    const { data: allbuyers = [], isLoading, refetch } = useQuery({
        queryKey: 'allbuyers',
        queryFn: async () => {
            const res = await fetch('https://resale-mobile-server-navy.vercel.app/users/buyer?buyer=user');
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return <div>Loading ...</div>
    }
    const handleDelete = allbuyer => {
        fetch(`https://resale-mobile-server-navy.vercel.app/users/buyer/${allbuyer._id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged)
            {
                toast.success('buyer deleted successfully');
                refetch();
            }
        })

    }
    return (
        <div>
            <h1 style={{ textShadow: '1px 1px  #CBD28F' }} className='text-center text-3xl font-bold text-primary my-12'>All Buyers</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            allbuyers.map((allbuyer, i) =>
                                <tr className='font-semibold hover'>
                                    <th>{i+1}</th>
                                    <td>{allbuyer.name}</td>
                                    <td>{allbuyer.email}</td>
                                    <td><button className='className="btn btn-ghost' onClick={()=>handleDelete(allbuyer)}>Delete</button></td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;