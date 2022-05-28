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
            <h2>Manage All Products {tools?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Ordered Quantity</th>
                            <th>Update Stock</th>
                            <th>Cancel Order</th>
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
            <input type="checkbox" id="stockUp" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="stockUp" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p>Update Stock Of </p>
                    <input type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                    <div class="modal-action">
                        <label for="stockUp" class="btn">Yay!</label>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ManageProducts;