import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        if (data) {
            fetch(`https://manufacturer-website-server-production.up.railway.app/product`, {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'content-type': 'application/json',

                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success("Successfully Update Your data")
                })
        }


    }
    return (
        <div>
            <h2 className='text-3xl text-primary'>Add products</h2>

            <div className='text-center mb-2'>
                <form className='lg:px-10 mx-5 ' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                },
                            })}
                            type="text"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-red-500 '>name  is required</span>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">About product</span>
                        </label>
                        <input {...register("description",
                            { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.description && <span className='text-red-500 '>Description  is required</span>}

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">MinOrder</span>
                        </label>
                        <input type="number" {...register("minOrder",
                            { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.minOrder && <span className='text-red-500 '>minOrder  is required</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">AvailAble</span>
                        </label>
                        <input type="number" {...register("availAble",
                            { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.availAble && <span className='text-red-500 '>availAble  is required</span>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Per Unit price</span>
                        </label>
                        <input type="number" {...register("unitPrice",
                            { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.unitPrice && <span className='text-red-500 '>unitPrice  is required</span>}


                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text text-white">Image Url</span>
                        </label>
                        <input {...register("image",
                            { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.image && <span className='text-red-500 '>image  is required</span>}


                    </div>




                    <input className='btn w-full max-w-xs text-white' type="submit" value='Upload product' />



                </form>
            </div>

        </div>
    );
};

export default AddProduct;