import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const CustomarReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://manufacturer-website-server-production.up.railway.app/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews])

    return (
        <div className=' relative top-[-110px]  bg-gray-800 py-[40px]'>
            <h2 className='text-center text-3xl text-white mb-6 uppercase'>Customars reviews {reviews.length}</h2>

            <div className='flex text-white float-right px-5'>
                <a href='#set1' title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md  bg-gray-900  border-gray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </a>
                <a href='#set2' title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md  bg-gray-900  border-gray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </a>
            </div>

            <div className='carousel w-full'>
                <div id="set1" class="carousel-item w-full grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 ">
                    {
                        reviews && reviews?.slice(0, 4)?.map(review => <SingleReview key={review._id} review={review} ></SingleReview>)
                    }
                </div>
                <div id="set2" class="carousel-item w-full grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 ">
                    {
                        reviews && reviews?.slice(4, 8)?.map(review => <SingleReview key={review._id} review={review} ></SingleReview>)
                    }
                </div>
            </div>

        </div>
    );
};

export default CustomarReview;