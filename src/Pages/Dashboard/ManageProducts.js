import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const { data: tools, isLoading, refetch } = useQuery("orders", () => fetch(`https://whispering-mountain-30344.herokuapp.com/tool`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }


    const updateStock = () => {

    }
    return (
        <div>
            <h2 className='text-3xl font-medium text-center my-3'>Manage All Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product ID</th>
                            <th>Ordered Quantity</th>
                            <th>Update Stock</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool, index) => <ManageProductRow
                                key={tool._id}
                                index={index}
                                tool={tool}
                                refetch={refetch}
                            ></ManageProductRow>)
                        }

                    </tbody>
                </table>
            </div>
            {/* Update Stock Modal */}
            <input type="checkbox" id="stockUp" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="stockUp" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p>Update Stock Of </p>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    <div className="modal-action">
                        <label htmlFor="stockUp" className="btn">Yay!</label>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ManageProducts;