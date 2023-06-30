import React, { useEffect, useState } from 'react';
import DisplayBrand from './DisplayBrand';

const DisplayBrands = () => {
    const [realmeProducts, setRealmeProducts] = useState([]);
    useEffect(()=>{
        fetch('/realmeProduct.json')
        .then(res => res.json())
        .then(data => setRealmeProducts(data)) 
    },[])
    return (
        <div className='w-full lg:w-5/6'>
            {
                realmeProducts.map(realmeProduct => <DisplayBrand realmeProduct={realmeProduct} key={realmeProduct.id}></DisplayBrand>)
            }
        </div>
    );
};

export default DisplayBrands;