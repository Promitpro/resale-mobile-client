import React, { useEffect, useState } from 'react';
import SaleProducts from './SaleProducts/SaleProducts';

const RightSideNav = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data)) 
    },[])
    
    return (

        <div className='w-full lg:w-5/6'>
            {
                products.map(product => <SaleProducts product={product} key={product._id}></SaleProducts>)
            }
        </div>
    );
};

export default RightSideNav;