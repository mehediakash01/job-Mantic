import React from 'react';
import Container from './Container';

const JobMatching = () => {
    return (
        <Container >
            <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
                <img  src="/images/jobMatch.png" alt="" />
                <div className='space-y-4'>
                    <h1 className='font-bold text-4xl'>Lightning-Fast Job <br /> Matching</h1>
                    <p>AI-powered 1:1 Job to Resume matching that positions you <br /> perfectly aligned in the competitive Job market with your skills, <br /> salary expectations, and career goals.</p>
                    <img className='opacity-60' src="/images/line.png" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default JobMatching;