import React from 'react';

const OrderRow = ({ tool, index }) => {
    const { productName, orderQuantity, email, phone, address, price } = tool

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{orderQuantity} Units</td>
            <td>{price * orderQuantity}</td>
            <td><button className='btn btn-xs'>Pay Now</button></td>
            <td><button className='btn btn-xs'>Cancel Order</button></td>
        </tr>
    );
};

export default OrderRow;