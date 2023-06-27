import React from 'react';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import RightSideNav from './RightSideNav/RightSideNav';

const Container = () => {
    return (
        <div className='flex'>
            <div className='w-1/3'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='w-2/3'>
                <RightSideNav></RightSideNav>
            </div>

        </div>
    );
};

export default Container;