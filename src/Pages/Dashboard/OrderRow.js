import React from 'react';

const OrderRow = ({ tool, index }) => {
    const { productName, orderQuantity, email, phone, address } = tool

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity} Units</td>
            <td>{ }</td>
            <td><button className='btn btn-xs'>Cancel Order</button></td>
        </tr>
    );
};

export default OrderRow;