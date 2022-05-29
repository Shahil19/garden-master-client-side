import React from 'react';
import Banner from './Banner';
import Benefits from './Benefits';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Tools from './Tools';
import WhyUs from './WhyUs';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <WhyUs></WhyUs>
            <Benefits></Benefits>
        </div>
    );
};

export default Home;