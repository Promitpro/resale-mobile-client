import React from 'react';
import img from '../../assets/verify.png'



const DisplayBrand = ({ prod, setMobileBooking }) => {

    


    return (
        <div className="card card-side bg-base-100  shadow-xl flex-col lg:flex-row mb-4">
            <figure><img className='h-auto lg:h-80' src={prod?.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{prod?.name}</h2>
                <p className='font-semibold text-base'>original price: {prod?.oldPrice}</p>
                <p className='font-semibold text-base'>resale price: {prod?.newPrice}</p>
                <p className='font-semibold text-base'>condition: {prod?.condition}</p>
                <p className='font-semibold text-base'>used: {prod?.used}</p>



                <div className='flex'>

                    <img className='w-4 h-4 mt-2 ' src={img} alt="" />
                    <p className='font-semibold text-xl'>seller name: {prod.sellerName}</p>
                </div>

                <div className="card-actions justify-end">
                    
                    
                    <label onClick={() => setMobileBooking(prod)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-primary to-secondary text-black" >Book Now</label>
                </div>
            </div>



        </div>
    );
};

export default DisplayBrand;