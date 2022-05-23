import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleCart = ({ product }) => {
    const navigate = useNavigate();
    const handelPurchase = () => {
        navigate('/purchase');
    }
    return (
        <div class="card shadow-xl lg:col-3 ">
            <figure><img className='w-[200px] h-[200px]' src={product.picture} alt="product-img" /></figure>
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
                    <button onClick={handelPurchase} className='btn btn-accent btn-sm' >Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;