import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const GoogleLogin = () => {
    const [user] = useAuthState(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // //----------------------- send user to server
    const [token] = useToken(gUser)


    // google sign in
    const googleSignin = () => {
        signInWithGoogle()
    }

    // redirect the user where the wanted to go (for require auth routes)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="grid h-20 card  place-items-center">
            <button onClick={googleSignin} className="btn btn-wide btn-outline">Login With Google</button>
        </div>
    );
};

export default GoogleLogin;