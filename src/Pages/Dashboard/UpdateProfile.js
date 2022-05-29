import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const email = user?.email

    const onSubmit = data => {
        if (email) {
            fetch(`https://whispering-mountain-30344.herokuapp.com/user/${email}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    navigate('/dashboard')
                    console.log(json)
                });
        }
    };
    return (
        <section>
            <h3 className='text-2xl font-medium text-center'>Update Profile</h3>
            <div className=' flex justify-center '>
                <form className='w-2/4' onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your nick name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Nick Name" className="input input-bordered w-full" />
                        <label className="label">
                            {errors.name && <span>Name is required</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input {...register("education", { required: true })} type="text" placeholder="Your school/collage/university" className="input input-bordered w-full" />
                        <label className="label">
                            {errors.education && <span>Education is required</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">City name</span>
                        </label>
                        <input {...register("city", { required: true })} type="text" placeholder="Which city do you live in?" className="input input-bordered w-full" />
                        <label className="label">
                            {errors.city && <span>Education is required</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Facebook Profile Link</span>
                        </label>
                        <input {...register("facebook", { required: true })} type="text" placeholder="Facebook profile link" className="input input-bordered w-full" />
                        <label className="label">
                            {errors.facebook && <span>Education is required</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input {...register("phone", { required: true })} type="text" placeholder="Your phone number" className="input input-bordered w-full" />
                        <label className="label">
                            {errors.phone && <span>Education is required</span>}
                        </label>
                    </div>

                    <input className='btn btn-wide block mx-auto' type="submit" />
                </form>
            </div>
        </section>
    );
};

export default UpdateProfile;