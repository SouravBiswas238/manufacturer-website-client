import React from 'react';
import factoryImg from '../../img/JJ.jpg'
const AboutCompany = () => {
    return (
        <div className='relative py-8 px-4 top-[-110px] bg-[url(http://demo2.steelthemes.com/induscity/wp-content/uploads/sites/9/2020/02/icon-area-bg.jpg?id=3907)] text-gray-50' >
            <h2 className='my-2 text-center text-3xl  font-semibold uppercase pb-5'> About the company</h2>
            <div className='grid lg:grid-cols-2 gap-4 sm:mx-2'>
                <div>
                    <img className='rounded w-full' src={factoryImg} alt="" />
                </div>
                <div className='px-2 text-[#848484]'>
                    <h3 className=' text-2xl py-5 text-white'>Itatools srl is an Italian Manufacturer of <span className='text-violet-400'> Strapping tools</span>. </h3>
                    <p>Our product portfolio include a complete range of battery operated, pneumatic and manual strapping tools, suitable for almost any plastic, steel and textile strap, used for multiple applications and in several different sectors.</p>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer hover:underline hover:text-primary text-violet-400">read more..</summary>
                        <div className="px-4 pb-4">
                            <p>Our product portfolio include a complete range of battery operated, pneumatic and manual strapping tools, suitable for almost any plastic, steel and textile strap, used for multiple applications and in several different sectors.</p>
                        </div>
                    </details>
                </div>
            </div>

        </div>
    );
};

export default AboutCompany;