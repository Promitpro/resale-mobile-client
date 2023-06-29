import React from 'react';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import RightSideNav from './RightSideNav/RightSideNav';

const Container = () => {
    return (
        <div className='flex flex-col lg:flex lg:flex-row mt-10'>
            <div className='w-full lg:w-1/3'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='w-full lg:w-2/3'>
                <RightSideNav></RightSideNav>
            </div>

        </div>
    );
};

export default Container;