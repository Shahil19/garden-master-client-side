import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {
        fetch('https://whispering-mountain-30344.herokuapp.com/tool', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {

                toast.success(`${data.name} Added`)
                navigate('/')
            }
            );

    };
    return (
        <div>
            <div className="mockup-window border border-base-300">
                <h2 className='text-2xl text-center font-bold'>Add A New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5 mb-10'>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Product NAme" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Product Short Description</span>
                        </label>
                        <textarea {...register("shortDescription", { required: true })} className="textarea textarea-bordered h-24" placeholder="Product Short Description"></textarea>
                        <label className="label">
                            {errors.shortDescription && <span className='text-red-500'>This field is required</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                        </label>
                        <input {...register("minQuantity", { required: true })} type="number" placeholder="Minimum Order Quantity" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.minQuantity && <span className='text-red-500'>This field is required</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input {...register("availableQuantity", { required: true })} type="number" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.availableQuantity && <span className='text-red-500'>This field is required</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <input {...register("price", { required: true })} type="number" placeholder="Product Price" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.price && <span className='text-red-500'>This field is required</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                            <span className="label-text">Product Image Link</span>
                        </label>
                        <input {...register("img", { required: true })} type="text" placeholder="Product Image Link" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.img && <span className='text-red-500'>This field is required</span>}
                        </label>
                    </div>

                    <input className='btn btn-wide block mx-auto' type="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddProduct;