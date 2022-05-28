import React from 'react';
import { useParams } from 'react-router-dom';
import {
    useQuery
} from 'react-query'
import Loading from '../Shared/Loading';
import TableRow from './TableRow';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Purchase = () => {
    const params = useParams()
    const id = params.id
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //  get data from server
    const { data: tool, isLoading, refetch } = useQuery("tool", () => fetch(`https://whispering-mountain-30344.herokuapp.com/tool/${id}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const { name, price, shortDescription, minQuantity, availableQuantity, img } = tool


    // user info
    const { email, displayName } = user;
    console.log({ email, displayName });
    // order
    const onSubmit = data => {

        fetch(`https://whispering-mountain-30344.herokuapp.com/order`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                reset()
            })

    };

    return (
        <div className='md:px-5 '>

            <div class="card max-w-max bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <h2 class="text-xl font-semibold">User Name: <span className='text-2xl font-bold'>{displayName}</span></h2>
                    <h2 class="card-title">User email: <span className='text-2xl font-bold'>{email}</span></h2>
                </div>
            </div>
            <h1 className='text-3xl font-bold text-center my-8'>Purchase <span className='text-cyan-500'>{name}</span></h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th>1</th>
                            <th className='w-1/4'>Product Name</th>
                            <td >{name}</td>
                        </tr>


                        <tr className="hover">
                            <th>2</th>
                            <th>About</th>
                            <td>{shortDescription}</td>
                        </tr>


                        <tr className="hover">
                            <th>3</th>
                            <th>Available Products</th>
                            <td>{availableQuantity}</td>
                        </tr>

                        <tr className="hover">
                            <th>4</th>
                            <th>Minimum Order Quantity</th>
                            <td>{minQuantity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Order now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Product Name</span>
                                    </label>
                                    <input {...register("productName", { required: true })} type="text" value={name} placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" value={user?.email} placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Order Quantity</span>
                                    </label>
                                    <input {...register("orderQuantity", { required: true })} type="number" placeholder={`Minimum ${minQuantity} units`} class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Address</span>
                                    </label>
                                    <input {...register("address", { required: true })} type="text" placeholder="Your Address" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Phone</span>
                                    </label>
                                    <input {...register("phone", { required: true })} type="text" placeholder="Your Phone Number" class="input input-bordered" />
                                </div>

                                <div class="form-control mt-6">
                                    <input type="submit" class="btn btn-primary"></input>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;