import React from 'react';
import { toast } from 'react-toastify';

const RowOrder = ({ index, sData, refetch }) => {

    const handelCancel = (id) => {
        if (window.confirm("are you want to delete?")) {
            if (id) {
                fetch(`https://flash-electronic-server-souravbiswas238.vercel.app/order/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        toast.success("Successfully DELETED")
                        refetch();
                    })
            }
        }
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{sData?.orderName}</td>
            <td>{sData?.email}</td>
            <td>{sData?.myOrder}</td>
            <td><span className='text-warning text-sm'>pending</span></td>
            <td><button onClick={() => handelCancel(sData?._id)} className='btn btn-sm btn-danger'>Cancel</button></td>


        </tr>
    );
};

export default RowOrder;