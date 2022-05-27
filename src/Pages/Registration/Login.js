import React from 'react';
import { useForm } from 'react-hook-form';
import GoogleLogin from './GoogleLogin';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [user] = useAuthState(auth);

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    //----------------- email login
    const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        const email = data.email
        const password = data.password
        signInWithEmailAndPassword(email, password)
        reset()
    };

    // redirect the user where the wanted to go (for require auth routes)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    return (

        <div className="grid card rounded-box place-items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-3xl text-center font-bold mb-2'>Please Login</h1>

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

                <label className="label">
                    <span className="label-text-alt text-blue-500 text-sm"><Link to='/signup'>New to Garden Master?</Link></span>
                </label>
            </form>

            <div className="divider">OR</div>
            <GoogleLogin></GoogleLogin>
        </div>

    );
};

export default Login;