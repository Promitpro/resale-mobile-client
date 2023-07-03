import React from 'react';
import PrivateButton from '../../../../PrivateButton/PrivateButton';
import img from '../../../../assets/star.png'
import { Link } from 'react-router-dom';


const SaleProducts = ({ product }) => {
    console.log(product);

    return (
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row mb-4">
            <figure><img src={product.image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl">{product.name}</h2>
                <p className='font-semibold text-xl'>price range: {product.price}</p>

                <div className='flex'>
                    
                    <img className='w-4 h-4 mt-1 ' src={img} alt="" />
                    <p className='font-semibold text-lg ml-1'>{product.ratings} ratings</p>
                </div>

                <div className="card-actions justify-end" >
                    <PrivateButton><Link to={{pathname: `/displayBrand/${product._id}`, state: {products: product.products}}}>Details</Link></PrivateButton>
                </div>
            </div>
        </div>
    );
};

export default SaleProducts;