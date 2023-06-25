import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shered/Loading';
import RowOrder from './RowOrder';

const ManageAllOrder = () => {


    const { data, isLoading, error, refetch } = useQuery('repoData', () =>
        fetch('https://flash-electronic-server-souravbiswas238.vercel.app/order', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json',
            },
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Product Name</th>
                            <th>email</th>
                            <th>Quantity</th>
                            <th>Shipping</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.map((sData, index) => <RowOrder
                            refetch={refetch}
                            key={data._id}
                            index={index}
                            sData={sData}></RowOrder>)}
                    </tbody>


                </table>
            </div>



        </div >
    );
};

export default ManageAllOrder;