import React from 'react';

const SingleReview = (props) => {

    const { ratting, review } = props.review;

    return (
        <div>
            <div class="carousel-item">
                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Customer Ratting: <span className='text-primary'>{ratting}/5</span> </h2>

                        <p>{review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;