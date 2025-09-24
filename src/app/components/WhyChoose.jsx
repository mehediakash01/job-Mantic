import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const WhyChoose = () => {
    return (
        <div className='w-11/12 mx-auto my-20'>
            <div className='mb-20 ml-44'>
                <h1 className='font-bold text-4xl'>Why Choose Our AI Job <br /> Placement Platform?</h1>
                <img src="/images/line.png" alt="" />
            </div>
            <div className='flex gap-6 justify-center items-center'>
                <div>
                    <h1 className='font-semibold text-4xl'>Smart Resume Tailoring</h1>
                    <p>Let our smart AI craft the perfect resume for every <br /> job—packed with the right keywords, skills,
                     and <br /> experiences to grab recruiters’ attention and land <br /> interviews faster.</p>
                         <button className="btn btn-secondary rounded-full text-white my-3 flex items-center"> Create a resume <IoIosArrowDroprightCircle /></button>
                </div>
               {/* right side graphic */}
        <div className="relative md:w-1/2">
          {/* floating labels */}
          <span className="absolute -top-4 left-1/3 -translate-x-1/2 bg-white shadow-md px-3 py-1 rounded-md font-medium text-sm">
            Job Description
          </span>
          <span className="absolute top-1/6   bg-white shadow-md px-3 py-1 rounded-md font-medium text-sm">
            Resume
          </span>

          {/* main illustration */}
          <img
            className="relative z-10 max-w-full"
            src="/images/jd.png"
            alt="Resume illustration"
          />

          {/* feature list */}
          <ul className="absolute top-1/12 right-0 space-y-2 text-gray-700 text-sm">
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

        </div>
    );
};

export default WhyChoose;