import React from 'react';
import { useForm } from 'react-hook-form';
import GoogleLogin from './GoogleLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Login = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    //----------------- email login
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const onSubmit = data => {
        console.log(data)
        const email = data.email
        const password = data.password
        createUserWithEmailAndPassword(email, password)
        reset()
    };

    return (

        <div className="grid card rounded-box place-items-center">

            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-3xl text-center font-bold mb-2'>Please Login</h1>
                <div className="form-control w-full max-w-xs">
                    <input {...register("name", { required: true })} type="text" placeholder="User Name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name && <span className="label-text-alt">This field is required</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name && <span className="label-text-alt">This field is required</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input {...register("password", { required: true })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.password && <span className="label-text-alt">This field is required</span>}
                    </label>
                </div>
                <input className='btn btn-wide' type="submit" />
            </form>

            <div className="divider">OR</div>

            <GoogleLogin></GoogleLogin>
        </div>

    );
};

export default Login;