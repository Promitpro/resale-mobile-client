import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AdvertiseItem = ({advertiseItem}) => {
    console.log(advertiseItem);
    const [seeProduct, setSeeProduct] = useState('');
    const navigate = useNavigate();
    const handleSeeProduct = brand => {
        setSeeProduct(brand);
        console.log(brand);
        navigate(`/displayBrand/${brand}`)
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full h-64' src={advertiseItem.image} alt="pic" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{advertiseItem.productName}</h2>
                        <p className='font-semibold text-sm'>price: {advertiseItem.newPrice}</p>
                        <p className='font-semibold text-sm'>product added on: {advertiseItem.time}</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleSeeProduct(advertiseItem.category)} className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                
        </div>
    );
};

export default AdvertiseItem;