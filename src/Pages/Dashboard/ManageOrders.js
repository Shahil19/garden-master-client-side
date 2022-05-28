import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery("orders", () => fetch(`https://whispering-mountain-30344.herokuapp.com/order`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Ordered Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Shift Order</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((tool, index) => <ManageOrderRow
                                key={tool._id}
                                index={index}
                                tool={tool}
                            ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;