import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleCart from './SingleCart';
import Loading from '../Shered/Loading'

const OurParts = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://pacific-fjord-64285.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handelPurchase = (id) => {
        navigate(`/purchase/${id}`);

    }

    return (
        <div className='lg:mx-10'>
            <h3 className='text-center  text-3xl pt-5'>Our Newest Products</h3>


            <div className='divider'></div>

            <div className='grid lg:grid-cols-3 gap-4 sm:px-2'>

                {
                    product.slice(0, 6).map(product => <SingleCart handelPurchase={handelPurchase} key={product._id} product={product}></SingleCart>)
                }
            </div>

        </div>
    );
};

export default OurParts;