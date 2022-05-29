import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AdminTableRow = ({ user, index, refetch }) => {
    const { email } = user
    const makeAdmin = () => {
        fetch(`https://whispering-mountain-30344.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            body: JSON.stringify({ email: email }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                // toast(`${email} is an Admin Now`)
                refetch()
            })
    }

    const deleteUser = () => {
        const proceed = window.confirm("Are you sure you want to delete user?")
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {
                    user.role === 'admin' ? "Admin" : <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>
                }
            </td>
            <td><button onClick={deleteUser} className='btn btn-xs bg-red-500'>Delete User</button></td>

        </tr>
    );
};

export default AdminTableRow;