import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ tool, index, refetch }) => {
    const { productName, orderQuantity, price, email, _id } = tool

    const cancelOrder = () => {
        const procced = window.confirm(`Are you sure you want to delete ${productName}`)
        if (procced) {
            fetch(`https://whispering-mountain-30344.herokuapp.com/order/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast.error(`${productName} deleted`)
                    refetch()
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity} Units</td>
            <td>{orderQuantity * price} tk</td>
            <td>{email}</td>
            <td ><button className='btn btn-xs loading'>Pending</button></td>
            <td><button className='btn btn-xs '>Shift</button></td>
            <td><button onClick={cancelOrder} className='btn btn-xs btn-error text-white'>Remove Order</button></td>
        </tr>
    );
};

export default ManageOrderRow;