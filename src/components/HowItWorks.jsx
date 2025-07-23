import React from 'react';
import step1 from '../assets/images/step1.png'
import step2 from '../assets/images/step2.png'
import step3 from '../assets/images/step3.png'

const HowItWorks = () => {
    return (
        <div className='my-16'>
            <div className='mb-16 text-center px-3 md:px-5 lg:px-0'>
                <h1 className='text-orange-500 text-3xl md:text-4xl font-bold mb-4'>How It Works</h1>
                <p className='text-gray-500 text-base font-semibold'>solve your problem through us by using our service. You have to follow some steps to do solve your problem.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='flex flex-col gap-5 items-center mb-16 lg:mb-0'>
                    <img src={step1} className='w-52' alt="" />
                    <h2 className='text-lg font font-semibold'>Create An Account</h2>
                </div>
                <div className='flex flex-col gap-5 items-center mb-16 lg:mb-0'>
                    <img src={step2} className='w-52' alt="" />
                    <h2 className='text-lg font font-semibold'>Post Your Questions</h2>
                </div>
                <div className='flex flex-col gap-5 items-center'>
                    <img src={step3} className='w-52' alt="" />
                    <h2 className='text-lg font font-semibold'>Find Your Solution</h2>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;