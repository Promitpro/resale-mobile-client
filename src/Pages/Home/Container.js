import React from 'react';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import RightSideNav from './RightSideNav/RightSideNav';

const Container = () => {
    return (
        <div>
            <h1 style={ {textShadow :'1px 1px  #CBD28F'}} className='text-center text-3xl font-bold text-primary my-12'>Our Brands</h1>
            <div className='flex flex-col lg:flex lg:flex-row mt-10'>
            
            <div className='w-full lg:w-1/3'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='w-full lg:w-2/3'>
                <RightSideNav></RightSideNav>
            </div>

        </div>
        </div>
        
    );
};

export default Container;