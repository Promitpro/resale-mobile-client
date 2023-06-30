import React from 'react';
import PrivateButton from '../../PrivateButton/PrivateButton';
import img from '../../assets/verify.png'


const DisplayBrand = ({realmeProduct}) => {
    return (
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row mb-4">
            <figure><img src={realmeProduct.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{realmeProduct.name}</h2>
                <p className='font-semibold text-xl'>price range: {realmeProduct.price}</p>
                <p className='font-semibold text-xl'>original price: {realmeProduct.price}</p>
                <p className='font-semibold text-xl'>resale price: {realmeProduct.price}</p>
                <p className='font-semibold text-xl'>condition: {realmeProduct.price}</p>
                


                <div className='flex'>
                    
                    <img className='w-4 h-4 mt-1 ' src={img} alt="" />
                    <p className='font-semibold text-xl'>seller name: {realmeProduct.price}</p>
                </div>

                <div className="card-actions justify-end">
                    <PrivateButton>Details</PrivateButton>
                </div>
            </div>
        </div>
    );
};

export default DisplayBrand;