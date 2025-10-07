import React from 'react';

const LastSection2 = () => {
    return (
        <div className='relative sticky top-16 bg-blue-800 md:h-[40vh] h-[52vh]'>

            <div className='text-xl text-white container mx-auto py-10 flex md:flex-row flex-col md:gap-0 md:p-0 gap-6 p-4'>
                <div>
                <h1 className='text-5xl'>Investment Management</h1>
                <p className='text-2xl max-w-xl mt-10'>We offer comprehensive asset management solutions tailored to meet the diverse needs of our clients.</p>
                </div>
                <div>
                    <video src="https://bkmglobal.in/investment/1.mp4"></video>
                </div>
            </div>
        </div>
    );
};

export default LastSection2;