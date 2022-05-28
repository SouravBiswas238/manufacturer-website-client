import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = data => {
        const email = user?.email;
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


    return (
        <div>
            <div className="card  bg-base-300 shadow-xl">
                <div className=" card-body ">
                    <h2 className="card-title ">Name: <span className='text-secondary'>{user.displayName} </span> </h2>
                    <h2 className="card-title ">Email:<span className='text-secondary'>{user.email} </span></h2>
                    <div className="card-actions justify-end">
                    </div>
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
        </div >
    );
};

export default MyProfile;