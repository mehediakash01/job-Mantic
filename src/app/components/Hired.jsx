import React from 'react';

const Hired = () => {
    return (
        <div className="bg-[#F9FBFF]">
            <h1 className='font-bold text-3xl text-center'>You are <span className='text-primary'>90% more likely</span> to get hired if you use AIApply</h1>
            <div className='w-11/12 mx-auto flex items-center justify-center my-16 gap-20 text-center'>
                <div className='space-y-2' >
                    <img className='w-auto mx-auto' src="/images/Vector (1).png" alt="" />
                    <h1 className='font-bold text-3xl'>9.1/10</h1>
                    <p>Quality Improvement Rating</p>
                    </div>
                <div className='space-y-2'>
                    <img className='w-auto mx-auto' src="/images/Vector (2).png" alt="" />
                    <h1 className='font-bold text-3xl'>5 Hrs</h1>
                    <p>Editing Hours saved per job</p>
                    </div>
                <div className='space-y-2'>
                    <img className='w-auto mx-auto' src="/images/Vector (3).png" alt="" />
                    <h1 className='font-bold text-3xl'>10 million</h1>
                    <p>Jobs our AI is trained on</p>
                    </div>
            </div>
        </div>
    );
};

export default Hired;