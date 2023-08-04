import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const Allsellers = () => {
    const {data: allsellers=[], isLoading, refetch} = useQuery({
        queryKey: 'allsellers',
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller?seller=seller');
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <progress className="progress w-56 left-1/3 ml-0 lg:ml-28"></progress>
    }
    const handleVerify = id => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged)
            {
                toast.success('seller verified successfully');
                refetch();
            }
        })
    }
     
    const handleDelete = allseller => {
        fetch(`http://localhost:5000/users/seller/${allseller._id}`,{
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
            <h1 style={{ textShadow: '1px 1px  #CBD28F' }} className='text-center text-3xl font-bold text-primary my-12'>All Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Delete</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            allsellers.map((allseller, i) =>
                                <tr className='font-semibold hover'>
                                    <th>{i+1}</th>
                                    <td>{allseller.name}</td>
                                    <td>{allseller.email}</td>
                                    <td><button className='btn btn-xs btn-secondary' onClick={()=>handleDelete(allseller)}>Delete</button></td>
                                    <td>
                                        {
                                            !allseller.verify &&
                                            <button className='btn btn-xs btn-primary' onClick={() => handleVerify(allseller._id)}>Verify</button>
                                        }
                                        {
                                            allseller.verify &&
                                            <p className='text-blue-500'>Verify</p>
                                        }
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allsellers;