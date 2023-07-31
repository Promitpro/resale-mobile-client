import React from 'react';
import img from '../../assets/verify.png'
import { toast } from 'react-hot-toast';



const DisplayBrand = ({ bdata, setMobileBooking }) => {

const handleReportItem = productId => {
    fetch(`http://localhost:5000/sellingProducts/${productId}/report`,{
        method: 'PUT'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0)
        {
            toast.success('This item is reported')
        }
    })
    
}    


    return (
        <div className="card card-side bg-base-100  shadow-xl flex-col lg:flex-row mb-4">
            <figure><img className='h-auto lg:h-80 w-full lg:w-80 object-cover' src={bdata?.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{bdata?.productName}</h2>
                <p className='font-semibold text-sm'>original price: {bdata?.oldPrice}</p>
                <p className='font-semibold text-sm'>resale price: {bdata?.newPrice}</p>
                <p className='font-semibold text-sm'>condition: {bdata?.condition}</p>
                <p className='font-semibold text-sm'>used: {bdata?.purchased}s</p>
                



                <div className='flex'>

                    <img className='w-4 h-4 mt-2 mr-2 ' src={img} alt="" />
                    <p className='font-bold text-base '>seller name: {bdata?.displayName}</p>
                </div>

                <div className="card-actions justify-end">
                    
                    
                    <label onClick={() => setMobileBooking(bdata)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-primary to-secondary text-black" >Book Now</label>
                    <label onClick={() => handleReportItem(bdata._id)} className="btn bg-gradient-to-r from-primary to-secondary text-black" >Report item</label>
                </div>
            </div>



        </div>
    );
};

export default DisplayBrand;