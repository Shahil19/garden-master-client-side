import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    // const 
    const { data: orders, isLoading, refetch } = useQuery("orders", () => fetch(`https://whispering-mountain-30344.herokuapp.com/user/order?email=${user?.email}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>MyOrders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Ordered Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((tool, index) => <OrderRow
                                key={tool._id}
                                index={index}
                                tool={tool}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;