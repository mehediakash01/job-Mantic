import React from 'react';

const JobMatching = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex items-center gap-16'>
                <img className='ml-24' src="/images/jobMatch.png" alt="" />
                <div className='space-y-4'>
                    <h1 className='font-bold text-4xl'>Lightning-Fast Job <br /> Matching</h1>
                    <p>AI-powered 1:1 Job to Resume matching that positions you <br /> perfectly aligned in the competitive Job market with your skills, <br /> salary expectations, and career goals.</p>
                    <img className='opacity-60' src="/images/line.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default JobMatching;