import React from 'react';
import { toast } from 'react-toastify';

const RowOrder = ({ index, data, refetch }) => {



    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data?.orderName}</td>
            <td>{data?.minOrder}</td>
            <td><span className='text-warning text-sm'>pending</span></td>
            <td><button className='btn btn-sm btn-danger'>Cancel</button></td>


        </tr>
    );
};

export default RowOrder;