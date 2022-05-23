import React, { useEffect, useState } from 'react';
import SingleCart from './SingleCart';

const OurParts = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div className='lg:mx-10'>
            <h3 className='text-center text-secondary text-3xl pt-5'>Our Newest Products</h3>
            <div className='divider'></div>
            <div className='grid lg:grid-cols-3 gap-4 sm:px-2'>
                {
                    product.slice(0, 6).map(product => <SingleCart key={product._id} product={product}></SingleCart>)
                }
            </div>

        </div>
    );
};

export default OurParts;