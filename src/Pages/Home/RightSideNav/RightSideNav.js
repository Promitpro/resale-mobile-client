import React, { useState } from 'react';
import realme from '../../../assets/brand/realme.jpg'
import redmi from '../../../assets/brand/redmi.jpg'
import samsung from '../../../assets/brand/samsung.jpg'
import PrivateButton from '../../../PrivateButton/PrivateButton';
import img from '../../../assets/star.png';
import { Link, useNavigate } from 'react-router-dom';

const RightSideNav = () => {
    const [selectedBrand, setSelectedBrand] = useState('');
    const navigate = useNavigate();

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
        console.log(brand);
        navigate(`/displayBrand/${brand}`)
    }
    
    return (

        <div className='w-full lg:w-5/6'>
           
            <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row mb-4">
            <figure><img src={realme} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">Realme</h2>
                <p className='font-semibold text-xl'>price range: 5000-25000</p>

                <div className='flex'>
                    
                    <img className='w-4 h-4 mt-1 ' src={img} alt="" />
                    <p className='font-semibold text-lg ml-1'>4.1 ratings</p>
                </div>

                <div  className="card-actions justify-end" >
                    <PrivateButton onClick={() => handleBrandClick('Realme')}><Link to={`/displayBrand/Realme`}>Details</Link></PrivateButton>
                </div>
            </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row mb-4">
            <figure><img src={redmi} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">Redmi</h2>
                <p className='font-semibold text-xl'>price range: 8000-35000</p>

                <div className='flex'>
                    
                    <img className='w-4 h-4 mt-1 ' src={img} alt="" />
                    <p className='font-semibold text-lg ml-1'>4.8 ratings</p>
                </div>

                <div  className="card-actions justify-end" >
                    <PrivateButton onClick={() => handleBrandClick('Redmi')}><Link to={`/displayBrand/Redmi`}>Details</Link></PrivateButton>
                </div>
            </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row mb-4">
            <figure><img src={samsung} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">Samsung</h2>
                <p className='font-semibold text-xl'>price range: 10000-120000</p>

                <div className='flex'>
                    
                    <img className='w-4 h-4 mt-1 ' src={img} alt="" />
                    <p className='font-semibold text-lg ml-1'>4.5 ratings</p>
                </div>

                <div  className="card-actions justify-end" >
                    <PrivateButton onClick={() => handleBrandClick('Samsung')}><Link to={`/displayBrand/Samsung`}>Details</Link></PrivateButton>
                </div>
            </div>
        </div>
        </div>
    );
};

export default RightSideNav;