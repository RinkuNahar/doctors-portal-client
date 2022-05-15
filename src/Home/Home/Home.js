import React from 'react';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
        </div>
    );
};

export default Home;