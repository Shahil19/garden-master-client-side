import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin';

const SignUp = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    //----------------- email signup
    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useCreateUserWithEmailAndPassword(auth);


    const onSubmit = data => {
        const email = data.email
        const password = data.password
        console.log({ email, password });
        createUserWithEmailAndPassword(email, password)
        reset()
    };

    console.log(eError);
    return (
        <div className="grid card rounded-box place-items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-3xl text-center font-bold mb-2'>Please Register</h1>
                <div className="form-control w-full max-w-xs">
                    <input {...register("name", { required: true })} type="text" placeholder="User Name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name && <span className="label-text-alt text-red-500">This field is required</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email && <span className="label-text-alt text-red-500">This field is required</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input {...register("password", { required: true })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.password && <span className="label-text-alt text-red-500">This field is required</span>}
                    </label>
                </div>

                {
                    eError && <label className="label">
                        <span className="label-text-alt text-red-500">{eError.message}</span>
                    </label>
                }

                <input className='btn btn-wide' type="submit" />
            </form>

            <div className="divider">OR</div>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default SignUp;