import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{
                backgroundImage: `url("http://5.imimg.com/data5/RD/NQ/ZF/ANDROID-2159056/product-jpeg-500x500.jpeg")`
            }}>
                <div class="hero-overlay bg-opacity-90"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md text-white">
                        <h1 class="mb-5 text-5xl font-bold">Flash Electronic</h1>
                        <p class="mb-5">We are the Quality Hand tools Manufacturer in Asia and offers Engineering Excellence for the world’s most demanding industries</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;