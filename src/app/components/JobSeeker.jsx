import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Container from './Container';

const JobSeeker = () => {
    return (
        <Container className='my-16'>
            <h1 className='text-2xl lg:text-4xl font-bold text-center '>Why Job Seekers Choose Our <span className='text-primary'>AI Resume</span> Builder</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6 gap-3'>
                <div className='bg-[#ECF7FF] rounded-lg space-y-2 p-3 text-center'>
                    <h1 className='font-bold text-4xl'>85%</h1>
                    <h1 className='font-bold text-2xl'>Higher Response Rate</h1>
                    <p>Users report significantly <br /> more interview invitations</p>
                </div>
                <div className='bg-white rounded-lg space-y-2 p-3 text-center'>
                    <h1 className='font-bold text-4xl'>5</h1>
                    <h1 className='font-bold text-2xl'>Minute Resume Creation</h1>
                    <p>Go from blank page <br /> to professional resume in minutes</p>
                </div>
                <div className='bg-white rounded-lg space-y-2 p-3 text-center'>
                    <h1 className='font-bold text-4xl'>50+</h1>
                    <h1 className='font-bold text-2xl'>Industry-Specific <br /> Optimization</h1>
                    <p>Templates and content <br /> tailored to your fields</p>
                </div>
                <div className='bg-[#ECF7FF] rounded-lg space-y-2 p-3 text-center'>
                    <h1 className='font-bold text-4xl'>AI</h1>
                    <h1 className='font-bold text-2xl'>Continuous Learning</h1>
                    <p>AI improves based on <br /> successful job placements</p>
                </div>
            </div>
            <button className="btn btn-secondary rounded-full w-fit mx-auto my-20 text-white  flex items-center">Build your resume now<IoIosArrowDroprightCircle /></button>
        </Container>
    );
};

export default JobSeeker;