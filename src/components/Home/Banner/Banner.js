import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-box '>


            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    {/* <img src="http://demo2.steelthemes.com/induscity/wp-content/uploads/sites/9/2020/02/slide1-h3.jpg" className="w-full" /> */}
                    <div className='my-banner bg-fixed bg-[url(http://demo2.steelthemes.com/induscity/wp-content/uploads/sites/9/2020/02/slide1-h3.jpg)]'>

                        <div className='z-30 text-white absolute  -translate-y-1/2 left-[200px] right-6 top-1/2'>
                            <div className='text-[24px] shear-animation  '>   Welcome to Leading Industry</div>
                            <div className='text-[90px] shear-animation  font-bold'>
                                MANUFACTORY
                            </div>
                            <div className='text-[20px] shear-animation m-0 font-semibold '>
                                <p>Our Company has consistently embraced innovation to provide a</p>
                                <p>superior level of excellence for our customers.</p>
                            </div>

                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-30">
                        <a href="#slide3" className="my-button-3 hover:bg-[#f7c02d] ">❮</a>
                        <a href="#slide2" className="  my-button-3 hover:bg-[#f7c02d]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='my-banner bg-fixed bg-[url(http://demo2.steelthemes.com/induscity/wp-content/uploads/sites/9/2020/02/slide2-h3.jpg)]'>

                        <div className='z-30 text-white absolute  -translate-y-1/2 lg:left-[200px] sm:left-2 right-6 top-1/2'>
                            <div className='text-[24px] transition-all my-animation'>   Welcome to Leading Industry</div>
                            <div>
                                MANUFACTORY
                            </div>
                            <div>
                                <p>Our Company has consistently embraced innovation to provide a</p>
                                <p>superior level of excellence for our customers.</p>
                            </div>

                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-30">
                        <a href="#slide1" className="my-button-3 hover:bg-[#f7c02d] ">❮</a>
                        <a href="#slide3" className="  my-button-3 hover:bg-[#f7c02d]">❯</a>
                    </div>
                </div>






            </div>
        </div >
    );
};

export default Banner;