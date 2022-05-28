import React from 'react';
import { useQuery } from 'react-query';
import RowOrder from './RowOrder';

const ManageAllOrder = () => {


    const { data, isLoading, error, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/order', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json',
            },
        }).then(res =>
            res.json()
        )

    )
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Shipping</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.map((data, index) => <RowOrder
                            refetch={refetch}

                            key={data._id} index={index} data={data}></RowOrder>)}
                    </tbody>


                </table>
            </div>



        </div >
    );
};

export default ManageAllOrder;