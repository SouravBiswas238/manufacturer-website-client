import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const CustomarReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://pacific-fjord-64285.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='my-5 bg-accent py-5'>
            <h2 className='text-center text-3xl text-white'>Customars reviews {reviews.length}</h2>
            <div class="carousel carousel-center  p-4 space-x-4 ">

                {
                    reviews.map(review => <SingleReview key={review._id} review={review} ></SingleReview>)
                }



            </div>
        </div>
    );
};

export default CustomarReview;