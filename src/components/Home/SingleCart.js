import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCart = ({ product, handelPurchase }) => {



    return (
        <div class="card shadow-xl lg:col-3 ">


            <figure><img className='w-[200px] h-[200px] mt-3' src={product.image} alt="product-img" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {product?.name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>

                <p>{product?.description?.slice(0, 70)}....</p>
                <h3>Price: <span className='text-success'>{product?.unitPrice}$</span> /pices </h3>
                <h3>Min Quantity: <span className='text-success'>{product?.minOrder} </span>  </h3>
                <h3>Available Quantity:<span className='text-success'>{product?.availAble} </span></h3>
                <div class="card-actions justify-center">
                    <button onClick={() => handelPurchase(product._id)} className=' btn btn-accent btn-sm text-white' >Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;