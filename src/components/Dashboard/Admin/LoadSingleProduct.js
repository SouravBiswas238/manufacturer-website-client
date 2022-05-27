import React from 'react';

const LoadSingleProduct = ({ index, data, refetch }) => {

    const handelProductDelete = (name) => {
        console.log(name)
    }


    return (

        <tr>
            <td>{index + 1}</td>
            <td>{data?.name}</td>
            <td>{data?.unitPrice}</td>
            <td>{data?.availAble}</td>
            <td>

                <button onClick={() => handelProductDelete()} className='btn btn-sm btn-outine'>delete</button>
            </td>

        </tr>

    );
};

export default LoadSingleProduct;