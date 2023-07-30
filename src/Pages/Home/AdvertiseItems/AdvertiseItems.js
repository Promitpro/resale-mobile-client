import React, { useContext } from 'react';
import img from '../../../assets/brand/samsung.jpg'
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from 'react-query';
import AdvertiseItem from './AdvertiseItem';

const AdvertiseItems = () => {
    const { user } = useContext(AuthContext);
    const url = 'http://localhost:5000/sellingProducts?productAdvertise=advertising';
    const {data: advertiseItems=[], isLoading} = useQuery({
        queryKey: 'advertiseItems',
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <progress className="progress w-56 left-1/3 ml-0 lg:ml-28"></progress>
    }


    return (
        advertiseItems.length &&
        <div>
            <h1 style={{ textShadow: '1px 1px  #CBD28F' }} className='text-center text-3xl font-bold text-primary my-12'>Advertisements</h1>
            <div className='my-14 grid grid-cols-1 lg:grid-cols-3 w-full gap-4 place-items-center'>
                {
                    advertiseItems.map(advertiseItem => <AdvertiseItem key={advertiseItem._id} advertiseItem={advertiseItem}></AdvertiseItem>)
                }
            </div>
        </div>

    );
};

export default AdvertiseItems;