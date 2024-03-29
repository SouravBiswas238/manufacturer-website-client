import React from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Loading';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../../hook/useToken';
// import useToken from '../../hooks/useToken';
import './Signup.css'


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, verifySending, verifyError] = useSendEmailVerification(auth);


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // const [token] = useToken(gUser || user);

    const navigate = useNavigate();

    let signInError;


    if (error || gError || updating) {
        signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>

    }
    const [token] = useToken(user || gUser);

    if (token) {
        navigate('/home');


    }
    if (loading || gLoading || updateError || verifySending) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);


        toast.success("Verification email send.");
        await updateProfile({ displayName: data.name });

        sendEmailVerification();


    }

    return (
        <div className='flex justify-center items-center  bg-center bg-cover  sign-up-bg'>
            <div className="card w-96  sign-up-cart  shadow-1 ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold text-white">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },

                                })}
                                type="text" placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {

                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide valid email'
                                    }
                                })}
                                type="email" placeholder="Your email"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {

                                        value: 6,
                                        message: 'must be 6 charters'
                                    }
                                })}
                                type="password" placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">
                                    {errors.password.message}
                                </span>}

                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value='Sign Up' />



                    </form>

                    <p className='text-center text-white'>Already have an account <Link to="/login" className='text-[#f7c02d]'>Login</Link> </p>
                    <div className='divider text-white'>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-outline text-[#f7c02d]'>Continue with Google</button>


                </div>
            </div>
        </div>
    );
};


export default SignUp;