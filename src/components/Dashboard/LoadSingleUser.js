import React from 'react';
import { toast } from 'react-toastify';

const LoadSingleUser = ({ index, data, refetch }) => {
    const { email, role } = data;

    const handelMakeAdmin = () => {
        fetch(`https://pacific-fjord-64285.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Faild to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('successfully make an admin')
                }
                else {
                    toast.error("Faild to make an admin")
                }
            })
    }

    // const handelDeleteUser = (id) => {
    //     fetch(`https://pacific-fjord-64285.herokuapp.com/user/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //     })
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             if (data.deleteCount > 0) {
    //                 toast.success('successfully Remuve an admin')
    //             }
    //             else {
    //                 toast.error("Faild to remuve")
    //             }
    //             refetch()
    //         })
    // }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{role !== 'admin' && <button onClick={() => handelMakeAdmin()} className='btn btn-outline btn-sm'>make admin</button>}</td>
            <td><button className='btn btn-outline btn-sm'>remove</button></td>
        </tr>
    );
};

export default LoadSingleUser;