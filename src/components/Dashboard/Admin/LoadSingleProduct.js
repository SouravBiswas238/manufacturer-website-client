import React from 'react';
import { toast } from 'react-toastify';

const LoadSingleProduct = ({ index, data, refetch }) => {


    const handelProductDelete = (id) => {

        const isDelete = window.confirm("Are You want to delete?")
        if (isDelete) {
            if (id) {
                fetch(`http://localhost:5000/product/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success("Successfully DELETED")
                    })

            }
        }




    }


    return (

        <tr>
            <td>{index + 1}</td>
            <td>{data?.name}</td>
            <td>{data?.unitPrice}</td>
            <td>{data?.availAble}</td>
            <td>

                <button onClick={() => handelProductDelete(data?._id)} >
                    <label for="my-modal-6" class="btn modal-button">Delete</label>
                </button>
            </td>

        </tr>

    );
};

export default LoadSingleProduct;