import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/solid'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <h3 className='text-3xl block'>Page Not NotFound</h3>
            <h3 className='text-5xl block'>404</h3>
            <EmojiSadIcon className='h-2/3'></EmojiSadIcon>
        </div>
    );
};

export default NotFound;