import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Loading from '../Shered/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [userDetail, setUserDetail] = useState();
    const nameLatter = user?.displayName?.charAt(0);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const email = user?.email;
    const onSubmit = data => {
        if (email) {
            fetch(`https://pacific-fjord-64285.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => toast.success("Successfully Update Your data"))
        }

    }

    useEffect(() => {
        fetch(`https://pacific-fjord-64285.herokuapp.com/user/${email}`)
            .then(res => res.json())
            .then(data => setUserDetail(data))

    }, [])

    return (
        <div>
            <div className="card  bg-base-300">
                <div className="card-actions justify-end">
                    <label for="dashBoard-sidebar" class=" mx-2 btn btn-primary btn-sm drawer-button lg:hidden">Open dashboard</label>
                </div>


                <div className='grid lg:grid-cols-2'>
                    <div className='bg-base-200 py-3'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                {
                                    user?.photoURL ? <img src={user?.photoURL} alt='userPhoto' /> : <span class="text-7xl uppercase">{nameLatter}</span>
                                }
                            </div>
                        </div>


                        <h2 className="card-title ">Name: <span className='text-secondary'>{userDetail?.name} </span> </h2>
                        <h2 className="card-title ">Email:<span className='text-secondary'>{userDetail?.email} </span></h2>
                        <h2 className="card-title ">Age:<span className='text-secondary'>{userDetail?.age} </span></h2>
                        <h2 className="card-title ">Country:<span className='text-secondary'>{userDetail?.country} </span></h2>
                        <h2 className="card-title ">Education:<span className='text-secondary'>{userDetail?.education} </span></h2>

                    </div>
                    <div className='bg-base-200 py-3'>
                        <h2 className='text-2xl'>Update your user profile</h2>
                        <form className='lg:px-10 mx-5' onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                        },
                                    })}
                                    type="text" value={user?.displayName}
                                    className="input input-bordered w-full max-w-xs" />

                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input {...register("education",
                                    { required: true })}
                                    className="input input-bordered w-full max-w-xs" />
                                {errors.education && <span className='text-red-500 '>Education  is required</span>}


                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Age</span>
                                </label>
                                <input {...register("age",
                                    { required: true })}
                                    className="input input-bordered w-full max-w-xs" />
                                {errors.age && <span className='text-red-500 '>Age  is required</span>}


                            </div>
                            <div className="form-control w-full max-w-xs mb-2">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input {...register("country")}
                                    className="input input-bordered w-full max-w-xs" />

                            </div>

                            <div className="form-control w-full max-w-xs mb-2">
                                <label className="label">
                                    <span className="label-text">Linkdin Profile Link</span>
                                </label>
                                <input {...register("linkdin")}
                                    className="input input-bordered w-full max-w-xs" />

                            </div>



                            <input className='btn w-full max-w-xs text-white' type="submit" value='Update' />



                        </form>

                    </div>
                </div>

            </div>
        </div >
    );
};

export default MyProfile;