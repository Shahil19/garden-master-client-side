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
    // order
    const onSubmit = data => {
        const productDetails = {
            address: data.address,
            email: data.email,
            orderQuantity: data.orderQuantity,
            phone: data.phone,
            productName: data.productName,
            price,
            img
        }

        fetch(`https://whispering-mountain-30344.herokuapp.com/order`, {
            method: 'POST',
            body: JSON.stringify(productDetails),
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

            <div className="card max-w-max bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="text-xl font-semibold">User Name: <span className='text-2xl font-bold'>{displayName}</span></h2>
                    <h2 className="card-title">User email: <span className='text-2xl font-bold'>{email}</span></h2>
                </div>
            </div>
            <h1 className='md:text-4xl text-2xl font-bold text-center my-8'>Purchase <span className='text-cyan-500'>{name}</span></h1>
            <div className="avatar block mx-auto">
                <div className="w-36 mx-auto mask mask-squircle">
                    <img src={img} alt="tool" />
                </div>
            </div>
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
                            <th>Price per product</th>
                            <td>{price} tk</td>
                        </tr>

                        <tr className="hover">
                            <th>4</th>
                            <th>Available Products</th>
                            <td>{availableQuantity} units</td>
                        </tr>

                        <tr className="hover">
                            <th>5</th>
                            <th>Minimum Order Quantity</th>
                            <td>{minQuantity} units</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Order now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input {...register("productName", { required: true })} type="text" value={name} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} type="email" value={user?.email} placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Order Quantity</span>
                                    </label>
                                    <input {...register("orderQuantity", { required: true })} type="number" placeholder={`Minimum ${minQuantity} units`} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Address</span>
                                    </label>
                                    <input {...register("address", { required: true })} type="text" placeholder="Your Address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Phone</span>
                                    </label>
                                    <input {...register("phone", { required: true })} type="text" placeholder="Your Phone Number" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary"></input>
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