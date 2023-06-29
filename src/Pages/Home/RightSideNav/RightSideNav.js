import React, { useEffect, useState } from 'react';
import img from '../../../assets/mobile3.jpeg'
import SaleProducts from './SaleProducts/SaleProducts';

const RightSideNav = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data)) 
    },[])
    
    return (

        <div>
            {
                products.map(product => <SaleProducts product={product} key={product.id}></SaleProducts>)
            }
        </div>
    );
};

export default RightSideNav;