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
        fetch(`https://flash-electronic-server-souravbiswas238.vercel.app/api/v1/products/${purchaseId}`)
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

        <div className='my-purchase bg-fixed bg-[url(https://cdn.corporatefinanceinstitute.com/assets/consumer-products.jpg)] relative '>

            <div className='grid grid-cols-2 py-5 '>
                <div class="card shadow-xl lg:col-2 bg-black text-white mx-5 my-shadow py-3">
                    <figure className=''><img className=' h-[400px] rounded-xl' src={product.image} alt="product-img" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            {product?.name}
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{product?.description}</p>
                        <h3>Price: <span className='text-success'>{product?.unitPrice}$</span> /pices </h3>
                        <h3>Min Quantity: <span className='text-success'>{product?.minOrder} </span>  </h3>
                        <h3>Available Quantity:<span className='text-success'>{product?.availAble} </span></h3>
                        <div class="card-actions justify-center">
                        </div>
                    </div>
                </div>
                <div className=' text-center bg-black text-white mx-5 rounded-xl my-shadow py-5'>
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

        </div>
    );
};

export default PurchaseDetail;