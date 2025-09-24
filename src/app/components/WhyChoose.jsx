import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Container from './Container';

const WhyChoose = () => {
    return (
        <Container className=' my-16'>
            <div className='mb-16 '>
                <h1 className='font-bold lg:text-4xl text-2xl'>Why Choose Our AI Job <br /> Placement Platform?</h1>
                <img src="/images/line.png" alt="" />
            </div>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-20   items-center'>
                <div className='space-y-4'>
                    <h1 className='font-semibold text-4xl'>Smart Resume Tailoring</h1>
                    <p>Let our smart AI craft the perfect resume for every <br /> job—packed with the right keywords, skills,
                     and <br /> experiences to grab recruiters’ attention and land <br /> interviews faster.</p>
                         <button className="btn btn-secondary rounded-full text-white my-3 flex items-center"> Create a resume <IoIosArrowDroprightCircle /></button>
                </div>
               {/* right side graphic */}
        <div className="relative md:w-1/2">
          {/* floating labels */}
          <span className="absolute hidden lg:block -top-4 left-1/3 -translate-x-1/2 bg-white shadow-md px-3 py-1 rounded-md font-medium text-sm">
            Job Description
          </span>
          <span className="absolute hidden lg:block top-1/6   bg-white shadow-md px-3 py-1 rounded-md font-medium text-sm">
            Resume
          </span>

          {/* main illustration */}
          <img
            className="relative z-10 max-w-full"
            src="/images/jd.png"
            alt="Resume illustration"
          />

          {/* feature list */}
          <ul className="absolute top-2/12 z-10 right-0 hidden lg:block space-y-2 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
               Customize Resume<span className="text-blue-500">•</span>
            </li>
            <li className="flex items-center gap-2">
              Experiences Match<span className="text-blue-500">•</span> 
            </li>
            <li className="flex items-center gap-2 ml-4">
               Keyword Match<span className="text-blue-500">•</span>
            </li>
            <li className="flex items-center gap-2 ml-6">
              Relevant Skills <span className="text-blue-500">•</span>
            </li>
          </ul>
        </div>
            </div>

        </Container>
    );
};

export default WhyChoose;