import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const params = useParams()
    console.log(params.id);
    return (
        <div>
            <h1 className='text-3xl'>purchase</h1>
        </div>
    );
};

export default Purchase;