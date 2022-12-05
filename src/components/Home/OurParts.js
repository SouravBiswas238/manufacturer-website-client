import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleCart from './SingleCart';
import Loading from '../Shered/Loading'

const OurParts = () => {
    const [product, setProduct] = useState([]);
    console.log(product)
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://manufacturer-website-server-production.up.railway.app/product')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const handelPurchase = (id) => {
        navigate(`/purchase/${id}`);

    }

    return (
        <section className="relative top-[-110px] py-6 sm:py-12 bg-gray-800 text-gray-100">
            <div className="container p-1 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 id='market' className="text-3xl font-bold uppercase">Our Market Sector</h2>
                    {/* Tabs */}
                    <div className="flex items-center  flex-wrap  overflow-x-hidden overflow-y-hidden sm:justify-center lg:flex-nowrap bg-gray-800 ">
                        <a rel="noopener noreferrer" href="#item1" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4  active:border-violet-400 active:text-gray-100  text-gray-50 ">Latest</a>
                        <a rel="noopener noreferrer" href="#item2" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4  active:border-violet-400 active:text-gray-100 border-gray-700 hover:text-gray-50 text-gray-400">Corrupti</a>
                        <a rel="noopener noreferrer" href="#item3" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4  active:border-violet-400 active:text-gray-100 border-gray-700 hover:text-gray-50 text-gray-400 ">Excepturi</a>
                        <a rel="noopener noreferrer" href="#item4" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4  active:border-violet-400 active:text-gray-100 border-gray-700 hover:text-gray-50 text-gray-400">Consectetur</a>
                    </div>
                </div>

                <div className='carousel w-full'>

                    <div id="item1" className="carousel-item w-full grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            product && product?.slice(0, 8)?.map(product => <SingleCart handelPurchase={handelPurchase} key={product._id} product={product}></SingleCart>)
                        }


                    </div>

                    <div id="item2" className="carousel-item w-full grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            product.slice(0, 7).map(product => <SingleCart handelPurchase={handelPurchase} key={product._id} product={product}></SingleCart>)
                        }

                    </div>
                    <div id="item3" className="carousel-item w-full grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            product.slice(0, 7).map(product => <SingleCart handelPurchase={handelPurchase} key={product._id} product={product}></SingleCart>)
                        }

                    </div>
                    <div id="item4" className="carousel-item w-full grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            product.slice(0, 7).map(product => <SingleCart handelPurchase={handelPurchase} key={product._id} product={product}></SingleCart>)
                        }

                    </div>


                </div>

                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </section>

        // <div className='lg:mx-10 bg-slate-300'>

        //     <h3 className='text-center  text-3xl pt-5'>Our Newest Products</h3>
        //     <div className='grid lg:grid-cols-3 gap-4 sm:px-2'>

        //         {
        //             product.slice(0, 6).map(product => <SingleCart handelPurchase={handelPurchase} key={product._id} product={product}></SingleCart>)
        //         }
        //     </div>

        // </div>
    );
};

export default OurParts;