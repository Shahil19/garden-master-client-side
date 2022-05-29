import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email
    const navigate = useNavigate()


    const { data: userInfo, isLoading, refetch } = useQuery("user", () => fetch(`https://whispering-mountain-30344.herokuapp.com/user/${email}`)
        .then(res => res.json())
    )


    // -------------------------------
    const { data: admin, adminLoading } = useQuery("admin", () => fetch(`https://whispering-mountain-30344.herokuapp.com/admin/${email}`)
        .then(res => res.json())
    )
    // ------------------------------
    if (isLoading) {
        return <Loading></Loading>
    }




    const { role, education, facebook, _id, phone, name, city } = userInfo

    return (
        <div className='py-10'>
            <h2 className='text-3xl font-medium text-center'>MyProfile {role === "admin" && <span className="badge badge-lg badge-secondary">{role}</span>}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th className='w-1/4'>Name:</th>
                            <td>{name}</td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>Email:</th>
                            <td>{user?.email}</td>

                        </tr>
                        <tr>
                            <th>ID:</th>
                            <td>{_id}</td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>Education: </th>
                            <td>{education}</td>
                        </tr>
                        <tr>
                            <th>Address/City: </th>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <th>Contact Number: </th>
                            <td>{phone}</td>
                        </tr>
                        <tr>
                            <th>Facebook Link: </th>
                            <td><a href={facebook} target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={() => navigate('/updateprofile')} className='btn btn-wide mx-auto block mt-6'>Update Profile</button>
        </div>
    );
};

export default MyProfile;