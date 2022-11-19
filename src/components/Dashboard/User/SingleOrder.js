import React from 'react';

const SingleOrder = (props) => {

    console.log(props?.SingleOrder);

    const { orderName, minOrder, orderId } = props?.singleOrder;
    return (

        <tr>
            <th>1</th>
            <td>{orderName}</td>
            <td>{minOrder}</td>
            <td>{orderId}</td>
            <td><button className='btn btn-outline btn-sm'>cancel</button></td>
        </tr>



    );
};

export default SingleOrder;