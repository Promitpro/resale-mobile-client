import React, { useEffect, useState } from 'react';
import SaleProducts from './SaleProducts/SaleProducts';
import { useQuery } from 'react-query';

const RightSideNav = () => {

    const {data: products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })

    // const [products, setProducts] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data)) 
    // },[])
    
    return (

        <div className='w-full lg:w-5/6'>
            {
                products.map(product => <SaleProducts product={product} key={product._id}></SaleProducts>)
            }
        </div>
    );
};

export default RightSideNav;