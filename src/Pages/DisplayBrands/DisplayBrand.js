import React from 'react';
import img from '../../assets/verify.png'



const DisplayBrand = ({ prod, setMobileBooking }) => {

    


    return (
        <div className="card card-side bg-base-100  shadow-xl flex-col lg:flex-row mb-4">
            <figure><img className='h-auto lg:h-80' src={prod?.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{prod?.name}</h2>
                <p className='font-semibold text-sm'>original price: {prod?.oldPrice}</p>
                <p className='font-semibold text-sm'>resale price: {prod?.newPrice}</p>
                <p className='font-semibold text-sm'>condition: {prod?.condition}</p>
                <p className='font-semibold text-sm'>used: {prod?.used}</p>
                <p className='font-semibold text-sm'>location: {prod?.place}</p>



                <div className='flex'>

                    <img className='w-4 h-4 mt-2 mr-2 ' src={img} alt="" />
                    <p className='font-bold text-base '>seller name: {prod.sellerName}</p>
                </div>

                <div className="card-actions justify-end">
                    
                    
                    <label onClick={() => setMobileBooking(prod)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-primary to-secondary text-black" >Book Now</label>
                </div>
            </div>



        </div>
    );
};

export default DisplayBrand;