import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolCard = ({ tool }) => {
    const { name, price, minQuantity, availableQuantity, shortDescription, img, _id } = tool

    // -- navigate to purchase route
    const navigate = useNavigate()
    const purchaseTool = () => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className="card max-w-full bg-base-100 shadow-xl">
            {/* <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p className='font-semibold'>Minimum Order Quantity: <span className='text-xl'>{minQuantity} </span>unit</p>
                <p className='font-semibold'>Available Quantity: <span className='text-xl'>{availableQuantity} </span>unit</p>
                <p className='font-semibold'>price: <span className='text-xl'>{price}tk </span>per unit</p>

                <div className="card-actions justify-start">
                    <button className='btn' onClick={purchaseTool}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;