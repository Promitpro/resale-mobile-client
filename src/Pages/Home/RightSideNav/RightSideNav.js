import React, { useEffect, useState } from 'react';
import SaleProducts from './SaleProducts/SaleProducts';

const RightSideNav = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data)) 
    },[])
    
    return (

        <div className='w-full lg:w-5/6'>
            {
                products.map(product => <SaleProducts product={product} key={product.id}></SaleProducts>)
            }
        </div>
    );
};

export default RightSideNav;