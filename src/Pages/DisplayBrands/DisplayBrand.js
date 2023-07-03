import React, { useState } from 'react';
import PrivateButton from '../../PrivateButton/PrivateButton';
import img from '../../assets/verify.png'
import BookingModal from '../BookingModal/BookingModal';


const DisplayBrand = ({ product, setMobileBooking }) => {

    


    return (
        <div className="card card-side bg-base-100  shadow-xl flex-col lg:flex-row mb-4">
            <figure><img className='h-auto lg:h-80' src={product.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{product.name}</h2>
                <p className='font-semibold text-base'>original price: {product.oldPrice}</p>
                <p className='font-semibold text-base'>resale price: {product.newPrice}</p>
                <p className='font-semibold text-base'>condition: {product.condition}</p>
                <p className='font-semibold text-base'>used: {product.used}</p>



                <div className='flex'>

                    <img className='w-4 h-4 mt-2 ' src={img} alt="" />
                    <p className='font-semibold text-xl'>seller name: {product.sellerName}</p>
                </div>

                <div className="card-actions justify-end">
                    
                    
                    <label onClick={() => setMobileBooking(product)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-primary to-secondary text-black" >Book Now</label>
                </div>
            </div>



        </div>
    );
};

export default DisplayBrand;