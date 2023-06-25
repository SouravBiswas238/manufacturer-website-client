import React from 'react';
import { useQuery } from 'react-query';
import LoadSingleUser from '../User/LoadSingleUser';

const MakeAdmin = () => {

    const { data, isLoading, error, refetch } = useQuery('repoData', () =>
        fetch('https://flash-electronic-server-souravbiswas238.vercel.app/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>
            res.json()
        )
    )
    // console.log(data);
    return (
        <div>
            <h3>Make admin</h3>


            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Make admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data?.map((data, index) => <LoadSingleUser
                            refetch={refetch}
                            key={data._id} index={index} data={data}></LoadSingleUser>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;