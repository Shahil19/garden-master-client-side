import React from 'react';

const WhyUs = () => {
    return (
        <div className="px-5">
            <h2 className='text-xl md:text-3xl lg:text-4xl font-medium text-cyan-500 text-center mt-10 mb-5'>Why Us?</h2>
            <div className="hero-content flex-col lg:flex-row lg:gap-36 md:gap-25">
                <img className='w-full' src="https://i.ibb.co/1q5FtmS/worker.jpg" className="max-w-lg rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 className="text-3xl font-bold mb-5">What Makes Us Different?</h1>
                    <ol className="list-decimal">
                        <li>Ease of installation and operation</li>
                        <li>High sensitivity to water vapor/moisture content</li>
                        <li>Instant, accurate results</li>
                        <li>User-friendly interface that displays clear readings</li>
                        <li>High performance stability</li>
                    </ol>
                </div>
            </div>

        </div>
    );
};

export default WhyUs;