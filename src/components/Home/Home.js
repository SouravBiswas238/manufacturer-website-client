import React from 'react';
import AboutCompany from './AboutCompany';
import Banner from './Banner';
import BusinessSumarry from './BusinessSumarry';
import News from './News';
import OurParts from './OurParts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurParts></OurParts>
            <BusinessSumarry></BusinessSumarry>
            <AboutCompany></AboutCompany>
            <News></News>
        </div>
    );
};

export default Home;