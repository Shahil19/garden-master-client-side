import React from 'react';

const Benefits = () => {
    return (
        <>
            <h2 className='text-2xl md:text-3xl font-medium text-center mt-10 mb-5 text-cyan-500'>Benefits Working with Us</h2>
            <div className="hero min-h-screen bg-base-200 lg:px-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://www.matteicomp.com/hubfs/img/thumb-ebook-benefits-of-rotary-compressors.png" />
                    <div>
                        <h1 className="text-3xl lg:text-5xl font-bold">INDUSTRY-WIDE BENEFITS</h1>
                        <p className="py-6">Beyond their exceptional technology and energy efficiency, what makes rotary vane compressors so unique is their universal demand. From agriculture to pharmaceuticals, and much in between, countless industries rely on vane compressors.</p>
                        <h3 className='font-medium text-lime-300'>of Rotary Vane Compressors</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Benefits;