import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const ReportedItems = () => {
    const {data: reportedItems=[], isLoading, error, refetch} = useQuery({
        queryKey: 'reportedItems',
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/reportedItems');
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

    const handleReportedItemsDelete = (reportedItem) => {
        fetch(`http://localhost:5000/reportedItems/${reportedItem._id}`,{
            method: 'DELETE',
            headers: {
              authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged)
            {
                toast.success('Reported item deleted successfully');
                refetch();
            }
        })
    }
    return (
        <div>
      <h1 style={{ textShadow: '1px 1px  #CBD28F' }} className='text-center text-3xl font-bold text-primary my-12'>Reported Items</h1>
      <div className="overflow-x-auto mx-auto w-2/3">
        <table className="table my-12">

          <thead className='text-center'>
            <tr>
              <th>

              </th>
              <th>Picture</th>
              <th>Product</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className='text-center'>


            {
              reportedItems.map((reportedItem, i) =>
                <tr className="hover" key={i}>
                  <th>
                    {i + 1}.
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={reportedItem.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      
                    </div>
                  </td>

                  <td className='font-semibold'>{reportedItem.productName}</td>
                  <td>{reportedItem.newPrice}</td>
                  
                  <th>
                    <button onClick={() => handleReportedItemsDelete(reportedItem)} className="btn btn-primary btn-xs">Delete</button>
                  </th>

                </tr>)
            }



          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ReportedItems;