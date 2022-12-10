import React from 'react';
import AboutCompany from '../AboutCompany';
import Banner from '../Banner/Banner';
import BusinessSumarry from '../BusinessSumarry';
import CustomarReview from '../CustomarReview';
import News from '../News';
import OurParts from '../OurParts';
import ServiceList from '../ServiceList/ServiceList';
import './Home.css'

const Home = () => {
    return (
        <div className='bg-black'>
            <div className='relative'>

                <Banner></Banner>
                <ServiceList></ServiceList>
                <OurParts></OurParts>
            </div>

            {/* <BusinessSumarry></BusinessSumarry> */}
            <AboutCompany></AboutCompany>
            <CustomarReview></CustomarReview>
            <News></News>
        </div>
    );
};

export default Home;