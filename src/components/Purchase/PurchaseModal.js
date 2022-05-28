import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const PurchaseModal = ({ user, product, setHandelOpen }) => {
    const { displayName, email } = user;
    const { _id, name, minOrder, availAble } = product;
    console.log(product);
    // Handel module data
    const handelOrderSubmit = (event) => {
        event.preventDefault();
        const myOrder = event.target.myOrder.value;
        const address = event.target.address.value;
        const phoneNumber = event.target.phone.value;

        const order = {
            orderId: _id,
            displayName: displayName,
            email: email,
            address: address,
            orderName: name,
            phoneNumber: phoneNumber,
            myOrder: myOrder,

        }

        console.log(myOrder < minOrder);
        console.log(myOrder, minOrder);

        console.log(availAble > myOrder)
        // send data to backend
        if (myOrder < minOrder) {
            if (availAble > myOrder) {
                fetch('http://localhost:5000/order', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(order)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            toast.success(`Successfully Booking Your Order`);
                        }
                        else {
                            toast.error("data already exist");
                        }
                    })
            }

            else {
                toast.error("Please enter minimun To Maximun quantity");
            }
        }
        else {
            toast.error("Please enter minimun To Maximun quantity");
        }

        setHandelOpen(false);

    }
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg text-secondary">Booking for:{name}</h3>
                    <form onSubmit={handelOrderSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <input type="text" name="name" disabled value={displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" required placeholder='Your address' className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" required placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="myOrder" placeholder={`Order minimum ${minOrder}`} required className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;