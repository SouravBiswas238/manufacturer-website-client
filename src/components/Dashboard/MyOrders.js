import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SingleOrder from './SingleOrder'

const MyOrders = () => {

    const [user] = useAuthState(auth);

    const [myOrder, setMyOrder] = useState([]);
    const navigate = useNavigate()

    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/order/${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {
                setMyOrder(data);
            });
    }, [])




    return (
        <div>
            <div className="overflow-x-auto  px-3">

                <h3 className='text-3xl text-center text-primary'>This is  <span className='text-purple-500'>{user.displayName}'s </span> product count <span className='text-purple-500'>{myOrder.length} </span> </h3>
                <table className="table table-zebra lg:w-full">

                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Order Name</th>
                            <th>Quantity</th>
                            <th>Order Id</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrder?.map(singleOrder => <SingleOrder key={singleOrder._id} singleOrder={singleOrder} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;