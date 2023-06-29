import React from 'react';
import img from '../../assets/banner/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className=" rounded-lg shadow-2xl" alt='' />
                <div className=''>
                    <h1 className="text-5xl font-bold">Upgrade Your Device without Breaking the Bank</h1>
                    <p className="py-6">Unlock the Value of Your Old Phone. Sell & Upgrade. Don't let your old phone gather dust. Sell it on our platform and unlock its value, allowing you to easily upgrade to the latest technology without breaking the bank.</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;