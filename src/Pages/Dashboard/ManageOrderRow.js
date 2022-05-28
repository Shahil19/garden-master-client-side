import React from 'react';

const ManageOrderRow = ({ tool, index }) => {
    const { productName, orderQuantity } = tool
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity} Units</td>
            <td>{ }</td>
            <td><button className='btn btn-xs loading'>Pending</button></td>
            <td><button className='btn btn-xs '>Shift</button></td>
            <td><button className='btn btn-xs'>Cancel Order</button></td>
        </tr>
    );
};

export default ManageOrderRow;