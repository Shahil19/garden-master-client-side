import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminTableRow from './AdminTableRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery("users", () => fetch(`https://whispering-mountain-30344.herokuapp.com/user`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>MakeAdmin{users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Authority</th>
                            <th>Authority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <AdminTableRow
                                key={index}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></AdminTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;