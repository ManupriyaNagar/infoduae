import React from 'react';

const LastSection1 = () => {
    return (
        <div className='relative sticky top-16 bg-blue-800  md:h-[40vh] h-[52vh] '>
            <div className='text-xl text-white container mx-auto py-10 flex flex md:flex-row flex-col md:gap-0 md:px-0 gap-6 p-4'>
                <div>
               <h1 className='text-5xl'> Uplearn</h1>
               <p className='text-2xl max-w-xl mt-10'> We believe in the power of uplearning outdated practices and embracing new strategies for financial success.</p>
               </div>
               <div>
                <video src="https://bkmglobal.in/investment/3.mp4" autoPlay></video>
               </div>
            </div>
        </div>
    );
};

export default LastSection1;