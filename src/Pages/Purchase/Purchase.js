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
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //  get data from server
    const { data: tool, isLoading, refetch } = useQuery("tool", () => fetch(`https://whispering-mountain-30344.herokuapp.com/tool/${params.id}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const { name, price, shortDescription, minQuantity, availableQuantity, img } = tool


    // order
    const onSubmit = data => {
        const orderDetails = {
            orderQuantity: data.orderQuantity,
            email: user.email
        }
        console.log(orderDetails)
        reset()
    };

    return (
        <div className='md:px-5 '>
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
                    </tbody>
                    <tbody>
                        <tr className="hover">
                            <th>2</th>
                            <th>About</th>
                            <td>{shortDescription}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="hover">
                            <th>3</th>
                            <th>Available Products</th>
                            <td>{availableQuantity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* ------------------ Order Quantity --------------------- */}
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control">
                        <label class="label justify-center font-semibold text-3xl">
                            <span class="label-text text-xl">Order Quantity</span>
                        </label>
                        <label class="input-group justify-center">
                            <input {...register("orderQuantity", { required: true })} type="number" placeholder={`Minimum ${minQuantity}`} class="input input-bordered w-3/4" />
                            <span>Units</span>
                        </label>
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <input className='btn btn-wide mt-5' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Purchase;