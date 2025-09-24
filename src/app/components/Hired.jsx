import React from 'react';
import Container from './Container';

const Hired = () => {
    return (
        <div className="bg-[#F9FBFF] my-16">
            <h1 className='font-bold text-3xl text-center'>You are <span className='text-primary'>90% more likely</span> to get hired if you use AIApply</h1>
            <Container className=' flex items-center flex-col lg:flex-row justify-center my-16 lg:gap-20 gap-10 text-center'>
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
            </Container>
        </div>
    );
};

export default Hired;