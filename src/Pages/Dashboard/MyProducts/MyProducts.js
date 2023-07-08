import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/AuthProvider';


const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/sellingProducts?email=${user?.email}`;
  const { data: sellingProducts = [] } = useQuery({
    queryKey: 'sellingProducts',
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  })
  return (
    <div>
      <h1 style={{ textShadow: '1px 1px  #CBD28F' }} className='text-center text-3xl font-bold text-primary my-12'>My Products</h1>
      <div className="overflow-x-auto mx-auto w-2/3">
        <table className="table my-12">
          {/* head */}
          <thead className='text-center'>
            <tr>
              <th>

              </th>
              <th>Picture</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
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

                </tr>)
            }



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;