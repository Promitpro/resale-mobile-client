import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const payment = useLoaderData();
    console.log(payment);
    return (
        <div>
            <h1 style={ {textShadow :'1px 1px  #CBD28F'}} className='text-center text-3xl font-bold text-primary my-12'>Payment</h1>
            <p className='text-xl  text-center font-normal'>Please pay Tk <strong>{payment?.price}</strong> for <strong>{payment?.mobileName}</strong> </p>
            
        </div>
    );
};

export default Payment;