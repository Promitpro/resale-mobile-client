import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const payment = useLoaderData();
    
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <progress className="progress w-56 left-1/3 ml-0 lg:ml-28"></progress>
    }
    
    return (
        <div>
            <h1 style={{ textShadow: '1px 1px  #CBD28F' }} className='text-center text-3xl font-bold text-primary my-12'>Payment</h1>
            <p className='text-xl  text-center font-normal mb-12'>Please pay Tk <strong>{payment?.price}</strong> for <strong>{payment?.mobileName}</strong> </p>
            <Elements className='w-96 my-12' stripe={stripePromise}>
                <CheckoutForm payment={payment} />
            </Elements>

        </div>
    );
};

export default Payment;