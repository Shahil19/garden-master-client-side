import React from 'react';
import { BeakerIcon, EmojiHappyIcon, FlagIcon, HeartIcon, SparklesIcon } from '@heroicons/react/solid'

const BusinessSummary = () => {
    return (
        <div className=' py-10 bg-base-200'>
            <h2 className='text-4xl text-cyan-500 font-bold text-center mb-5'>Business Summary</h2>

            <div className="hero-content flex-col lg:flex-row-reverse text-center bg-base-200">
                {/* <img src="https://api.lorem.space/image/movie?w=260&h=400" alt='' className="max-w-lg rounded-lg shadow-2xl" /> */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Helping the Industry with 10k+ Equipments available for sale Anytime</h1>
                    <h2 className="text-xl md:text-2xl font-medium py-6">We believe in trust</h2>
                    <p className="py-6">we served 100+ customers, 120M+ Annual revenue, 33K+ Reviews, 50+ tools</p>
                    <button className="btn btn-primary">Learn more about us</button>
                </div>
            </div>

            <div className='grid md:grid-cols-4 grid-cols-2 gap-10 pt-5 '>
                <div className='text-center'>
                    <div className="avatar justify-center">
                        <div className="w-20 rounded">
                            <SparklesIcon className='w-full'></SparklesIcon>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>20000k+ sales</h3>
                    </div>
                </div>

                <div className='text-center'>
                    <div className="avatar justify-center">
                        <div className="w-20 rounded">
                            <FlagIcon className='w-full'></FlagIcon>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>35k+ Countries</h3>
                    </div>
                </div>

                <div className='text-center'>
                    <div className="avatar justify-center">
                        <div className="w-20 rounded">
                            <EmojiHappyIcon className='w-full'></EmojiHappyIcon>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>4.5k+ Happy Clients</h3>
                    </div>
                </div>

                <div className='text-center'>
                    <div className="avatar justify-center">
                        <div className="w-20 rounded">
                            <HeartIcon className='w-full'></HeartIcon>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold'>10k+ Reviews</h3>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BusinessSummary;