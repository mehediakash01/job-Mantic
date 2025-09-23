import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Banner = () => {
  return (
    <div className="bg-[#F9FBFF]">
     

      {/* parent container */}
      <div className="w-11/12 mx-auto flex items-center justify-between px-12 py-16  ">
        {/* text content */}
        <div>

    <img className="mb-3"  src="/images/logo.png" alt="" />
    <h1 className="text-5xl mb-3">AI Resume Builder & <br /> Job Placement – <span className="font-bold">Get <br /> Hired 3X Faster</span></h1>
    <p>Boost your job search with our AI-powered platform that <br /> tailors resumes, beats ATS, and helps you land better
     jobs <br /> faster.</p>
     <button className="btn btn-secondary rounded-full text-white my-3 flex items-center">Improve your resume for FREE <IoIosArrowDroprightCircle /></button>
        </div>
        {/* image content */}
        
        <div className="relative" >
        <img  src="/images/rightSideImg.png" alt="" />
        <div className="absolute ml-80 -mt-24 "><img  className="ml-20" src="/images/1st.png" alt="" /><img className="ml-8" src="/images/2nd.png" alt="" /><img className="ml-4"  src="/images/3rd.png" alt="" /></div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
