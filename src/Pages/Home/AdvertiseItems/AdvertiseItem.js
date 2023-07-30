import React from 'react';

const AdvertiseItem = ({advertiseItem}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full h-64' src={advertiseItem.image} alt="pic" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{advertiseItem.productName}</h2>
                        <p className='font-semibold text-sm'>price: {advertiseItem.newPrice}</p>
                        <p className='font-semibold text-sm'>product added on: {advertiseItem.time}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                
        </div>
    );
};

export default AdvertiseItem;