import React from 'react';
import Banner from './Banner';
import Container from './Container';
import Reviews from './Reviews/Reviews';
import AdvertiseItems from './AdvertiseItems/AdvertiseItems';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AdvertiseItems></AdvertiseItems>
          <Container></Container>
          <Reviews></Reviews>
        </div>
    );
};

export default Home;