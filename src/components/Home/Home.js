import React from 'react';
import Banner from './Banner';
import BusinessSumarry from './BusinessSumarry';
import OurParts from './OurParts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurParts></OurParts>
            <BusinessSumarry></BusinessSumarry>
        </div>
    );
};

export default Home;