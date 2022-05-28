import React from 'react';
import factoryImg from '../../img/JJ.jpg'
const AboutCompany = () => {
    return (
        <div className='bg-base-100' >
            <h2 className='my-5 text-center text-3xl text-accent '> About the company</h2>
            <div className='grid lg:grid-cols-2 gap-4 sm:mx-2'>
                <div>
                    <img className='rounded w-full' src={factoryImg} alt="" />
                </div>
                <div className='px-2'>
                    <h3 className='text-center text-2xl py-5'>Itatools srl is an Italian Manufacturer of <span className='text-accent'> Strapping tools</span>. </h3>
                    <p>Our product portfolio include a complete range of battery operated, pneumatic and manual strapping tools, suitable for almost any plastic, steel and textile strap, used for multiple applications and in several different sectors.</p>
                    <button className="btn btn-accent text-white btn-sm my-5">read more</button>
                </div>
            </div>

        </div>
    );
};

export default AboutCompany;