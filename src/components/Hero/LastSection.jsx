import React from 'react';

const LastSection = () => {
    return (
        <div className='relative sticky top-16 bg-black md:h-[40vh] h-[52vh]'>
            <div className='text-xl text-white container mx-auto py-10 flex flex md:flex-row flex-col md:gap-0 md:px-0 gap-6 p-4'>
                <div>
                <h1 className='text-5xl'>Market Alert</h1>
                <p className='text-2xl max-w-xl mt-10'>We specialize in delivering precise trading signals that empower investors to make informed decisions.</p>
                </div>
                <div>
                    <video src="https://bkmglobal.in/investment/2.mp4"></video>
                </div>
            </div>

        </div>
    );
};

export default LastSection;