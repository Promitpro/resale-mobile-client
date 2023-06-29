import React from 'react';
import Banner from './Banner';
import Container from './Container';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Container></Container>
          <Reviews></Reviews>
        </div>
    );
};

export default Home;