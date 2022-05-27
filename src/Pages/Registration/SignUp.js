import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin';

const SignUp = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    //----------------- email signup
    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useCreateUserWithEmailAndPassword(auth);

    // --------------------Create new User
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        console.log({ email, password });
        createUserWithEmailAndPassword(email, password)
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
                <h1 className='text-3xl text-center font-bold mb-2'>Please Register</h1>
                <div className="form-control w-full max-w-xs">
                    <input {...register("name", { required: true })} type="text" placeholder="User Name" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name && <span className="label-text-alt text-red-500">Name is required</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email && <span className="label-text-alt text-red-500">Email is required</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <input {...register("password", { required: true })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.password && <span className="label-text-alt text-red-500">Password is required</span>}
                    </label>
                </div>

                {
                    eError && <label className="label">
                        <span className="label-text-alt text-red-500">{eError.message}</span>
                    </label>
                }

                <input className='btn btn-wide' type="submit" />
                <label className="label">
                    <span className="label-text-alt text-blue-500 text-sm"><Link to='/login'>Already have an account?</Link></span>
                </label>
            </form>

            <div className="divider">OR</div>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default SignUp;