import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-5'>Business Summary</h2>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" alt='' class="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-2xl md:text-4xl font-bold">Helping the Industry with 10k+ Equipments available for sale Anytime</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Learn more about us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;