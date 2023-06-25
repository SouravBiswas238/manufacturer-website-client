import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCart = ({ product, handelPurchase }) => {



    return (

        <article className="hover:my-shadow flex flex-col  bg-gray-900 h-96">
            <div className=' relative overflow-hidden ease-in-out duration-300 cart-animation px-2 py-2 rounded'>
                <div className='overflow-hidden rounded'>
                    <img alt="" className="object-cover z-1 ease-in-out duration-300 w-full h-52 hover:scale-105 bg-gray-500" src={product.image} />
                </div>
                <div className="flex text-sm cart-class  ease-in-out duration-300 opacity-0   justify-center absolute left-[25%] top-[300px] ">

                    <button type="button" data-tip="Add" className=" tooltip tooltip-top flex  hover:scale-110 ease-linear duration-300 hover:text-[#f7c02d] items-center px-2 py-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                    </button>
                    <button type="button" onClick={() => handelPurchase(product._id)} className="flex items-center ease-in duration-300 px-2 py-1 space-x-1">
                        <span className='my-button-3 hover:scale-110 ease-linear duration-300'>Purchase</span>
                    </button>
                    <button type="button" data-tip="Preview" className=" tooltip tooltip-top flex items-center my-shadow px-2 my-border  ">
                        <FontAwesomeIcon className='hover:text-[#f7c02d] text-white hover:scale-110 ease-linear duration-300' icon={faEye} />
                    </button>

                </div>
            </div>
            <div className="flex flex-col flex-1 px-6 py-4">

                <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-4">
                            <p onClick={() => handelPurchase(product._id)} className="text-xs tracking-wider uppercase hover:underline  text-violet-400">  {product?.name}</p></h3>
                        <p className="text-sm  text-gray-400">Min Order : {product?.minOrder}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold">{product?.unitPrice}€</p>
                        <p className="text-sm line-through  text-gray-600">7€</p>
                    </div>
                </div>
                <h3 className="flex-1 py-2 text-sm font-semibold leading-snug">{product?.description?.slice(0, 60)}....</h3>

            </div>
        </article>

    );
};

export default SingleCart;