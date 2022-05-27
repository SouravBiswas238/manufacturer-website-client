import React from 'react';
import { useQuery } from 'react-query';
import LoadSingleProduct from './LoadSingleProduct';

const ManageAllPro = () => {

    const { data, isLoading, error, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/product', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
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
                            <th>Name</th>
                            <th>Price / unit</th>
                            <th>Available</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.map((data, index) => <LoadSingleProduct
                            refetch={refetch}
                            key={data._id} index={index} data={data}></LoadSingleProduct>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllPro;