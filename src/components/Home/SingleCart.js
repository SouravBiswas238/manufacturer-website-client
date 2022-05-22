import React from 'react';

const SingleCart = ({ product }) => {
    return (
        <div class="card  bg-base-100 shadow-xl col-3">
            <figure><img className='w-full' src={product.picture} alt="product-img" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {product?.name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. {product.guid}</p>
                <h3>price: {product?.price} </h3>
                <h3>Min Quantity: <span className='text-success'>{product?.minQuantity} </span>  </h3>
                <h3>Available Quantity:<span className='text-success'>{product?.availQuantity} </span></h3>
                <div class="card-actions justify-center">
                    <button className='btn btn-accent btn-sm' >Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;