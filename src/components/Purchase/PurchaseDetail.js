import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shered/Loading';
import PurchaseModal from './PurchaseModal';

const PurchaseDetail = () => {
    const { purchaseId } = useParams();
    const [user, loading] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const [handelOpen, setHandelOpen] = useState('');

    useEffect(() => {
        fetch(`https://pacific-fjord-64285.herokuapp.com/product/${purchaseId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    // if (loading) {
    //     return <Loading></Loading>
    // }
    const handelOpenModal = () => {
        setHandelOpen(true);
    }


    return (
        <div className='grid grid-cols-2'>


            <div class="card shadow-xl lg:col-2 ">
                <figure><img className='w-[200px] h-[200px]' src={product.picture} alt="product-img" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {product?.name}
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. {product.guid}</p>
                    <h3>price: {product?.balance} </h3>
                    <h3>Min Quantity: <span className='text-success'>{product?.minQuantity} </span>  </h3>
                    <h3>Available Quantity:<span className='text-success'>{product?.availQuantity} </span></h3>
                    <div class="card-actions justify-center">
                    </div>
                </div>
            </div>


            <div className=' text-center'>
                <div className='text-start my-2'>

                    <h2>User Name: {user.displayName}</h2>
                    <h2>User email: {user.email}</h2>
                </div>
                <label for="order-modal" onClick={handelOpenModal} class="btn modal-button ">Add order</label>


                {
                    handelOpen && <PurchaseModal
                        user={user}
                        product={product}
                        setHandelOpen={setHandelOpen}
                    ></PurchaseModal>
                }

            </div>

        </div>
    );
};

export default PurchaseDetail;