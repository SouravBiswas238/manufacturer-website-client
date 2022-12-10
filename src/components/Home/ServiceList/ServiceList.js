import { faBuildingColumns, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServiceList = () => {
    return (
        <div className='relative top-[-110px]'>
            <section className="py-6 bg-[url(http://demo2.steelthemes.com/induscity/wp-content/uploads/sites/9/2020/02/icon-area-bg.jpg?id=3907)] text-gray-50">
                <div className="lg:container mx-auto px-4 lg:py-0 sm:p-10">
                    <div className="grid  grid-cols-1  lg:px-[150px] mx-auto auto-rows-fr lg:max-w-full gap-2 xl:gap-0 lg:grid-cols-3">

                        <div className="relative my-shadow ease-in-out duration-300 hover:text-[#f7c02d] top-[-30px] lg:hover:scale-125 hover:scale-y-110 py-[40px]   text-[#848484] bg-[#1e1e1e] hover:z-[10]  p-3 z-[1] flex flex-col items-center">
                            <div className="mb-2 mt-3 text-5xl font-bold ease-in-out duration-150  ">
                                <FontAwesomeIcon icon={faUserPlus} size='1x'></FontAwesomeIcon>
                            </div>
                            <h2 className='text-white font-semibold text-[20px]'>We are Professional</h2>
                            <p className='text-[16px] text-[#848484]'>Engineers</p>
                            <p className='text-[14px] text-[#848484] text-center mt-2
                            '>
                                <span>How all this mistaken idea of denouncing pleasure & praising pain was born.</span>
                            </p>
                        </div>
                        <div className="relative my-shadow ease-in-out duration-300 hover:text-[#f7c02d] top-[-30px] lg:hover:scale-125 hover:scale-y-110 scale-y-110 py-[40px]   text-[#848484] bg-[#1e1e1e]  p-3 hover:z-[10] z-[1] flex flex-col items-center">
                            <div className="mb-2 mt-3 text-5xl font-bold ease-in-out duration-150  ">
                                <FontAwesomeIcon icon={faBuildingColumns} size='1x'></FontAwesomeIcon>
                            </div>
                            <h2 className='text-white font-semibold text-[20px]'>We are Professional</h2>
                            <p className='text-[16px] text-[#848484]'>Engineers</p>
                            <p className='text-[14px] text-[#848484] text-center mt-2
                            '>
                                <span>How all this mistaken idea of denouncing pleasure & praising pain was born.</span>
                            </p>
                        </div>

                        <div className="relative my-shadow ease-in-out duration-300 hover:text-[#f7c02d] top-[-30px] lg:hover:scale-125 hover:scale-y-110 py-[40px]   text-[#848484] bg-[#1e1e1e]  hover:z-[10]  p-3 z-[1] flex flex-col items-center">
                            <div className="mb-2 mt-3 text-5xl font-bold ease-in-out duration-150  ">
                                <FontAwesomeIcon icon={faUserPlus} size='1x'></FontAwesomeIcon>
                            </div>
                            <h2 className='text-white font-semibold text-[20px]'>We are Professional</h2>
                            <p className='text-[16px] text-[#848484]'>Engineers</p>
                            <p className='text-[14px] text-[#848484] text-center mt-2
                            '>
                                <span>How all this mistaken idea of denouncing pleasure & praising pain was born.</span>
                            </p>
                        </div>

                    </div>
                </div>

                <div className='text-[#fff] lg:text-[24px] lg:text-[18px] m
                y-5 text-center'>
                    A high level service provider that recommended to any companies, firms or industries.
                    <br />
                    Perfect place for your <a className='underline link-color' href="#market">Market Sector</a>
                </div>
            </section>
        </div>
    );
};

export default ServiceList;