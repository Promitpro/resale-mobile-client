import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';


const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/sellingProducts?email=${user?.email}`;
  const { data: sellingProducts = [], isLoading, refetch } = useQuery({
    queryKey: 'sellingProducts',
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  })
  if(isLoading)
  {
    return <div>Loading ...</div>
  }
  const handleAdvertise = id => {
    fetch(`http://localhost:5000/sellingProducts/${id}`, {
      method: 'PUT'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged)
      {
        toast.success('Your product is now advertising in the home page');
        refetch()
      }
    })
  }
  return (
    <div>
      <h1 style={{ textShadow: '1px 1px  #CBD28F' }} className='text-center text-3xl font-bold text-primary my-12'>My Products</h1>
      <div className="overflow-x-auto mx-auto w-2/3">
        <table className="table my-12">

          <thead className='text-center'>
            <tr>
              <th>

              </th>
              <th>Picture</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className='text-center'>


            {
              sellingProducts.map((sellingProduct, i) =>
                <tr className="hover" key={i}>
                  <th>
                    {i + 1}.
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={sellingProduct.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      
                    </div>
                  </td>

                  <td className='font-semibold'>{sellingProduct.productName}</td>
                  <td>{sellingProduct.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Available</button>
                  </th>
                  <th>
                    {
                      sellingProduct?.productAdvertise !== 'advertising' && 
                      <button onClick={() => handleAdvertise(sellingProduct._id)} className="btn btn-ghost btn-xs">Advertise</button>
                    }
                    
                  </th>
                  <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </th>

                </tr>)
            }



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;