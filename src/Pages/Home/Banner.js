import React from 'react';
import banner from "../../assets/images/banner.jpg"
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Welcome to Garden Master</h1>
                    <p className="mb-5">Once you’re sure you’ve found the manufacturer’s genuine website, and you’ve located the download page for your device, you need to locate the correct driver to download.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;