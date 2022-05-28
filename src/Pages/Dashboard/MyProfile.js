import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h2 className='text-2xl'>MyProfile</h2>
            <div className="mockup-window border border-base-300">
                {/* <div className="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div> */}
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h2 className="text-5xl font-bold">{`Welcome ${user?.displayName}`}</h2>
                            <h3 className='text-2xl'>Name: {user?.displayName} </h3>
                            <h3 className='text-2xl'>Email: <span className='font-semibold'>{user?.email}</span> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;