import React from 'react';
import { toast } from 'react-toastify';

const ManageProductRow = ({ tool, index, refetch }) => {
    const { name, minQuantity, availableQuantity, price, img, _id } = tool

    const deleteProduct = () => {
        const procced = window.confirm(`Are you sure you want to delete ${name}`)
        if (procced) {
            fetch(`https://whispering-mountain-30344.herokuapp.com/tool/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast.error(`${name} deleted`)
                    refetch()
                })
        }
    }

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{_id}</td>
                <td>{availableQuantity} Units</td>
                <td><label for="stockUp" className="btn btn-xs">Update Stock</label></td>
                <td><button onClick={deleteProduct} className='btn btn-xs btn-error '>Delete</button></td>
            </tr>
        </>

    );
};

export default ManageProductRow;