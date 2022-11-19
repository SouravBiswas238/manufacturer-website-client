import React from 'react';
import AboutCompany from './AboutCompany';
import Banner from './Banner/Banner';
import BusinessSumarry from './BusinessSumarry';
import CustomarReview from './CustomarReview';
import News from './News';
import OurParts from './OurParts';
import ServiceList from './ServiceList/ServiceList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceList></ServiceList>

            <OurParts></OurParts>
            <BusinessSumarry></BusinessSumarry>
            <AboutCompany></AboutCompany>
            <CustomarReview></CustomarReview>
            <News></News>
        </div>
    );
};

export default Home;