import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ResumeBuilder = () => {
  return (
    <div className="max-w-5xl mx-auto my-20 px-4">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-[#99DAF4]/50 to-[#ACA2EF]/50 rounded-bl-[80px] rounded-tr-[80px] p-8 md:p-5">
        <div className="space-y-4 px-4 md:px-12 text-center md:text-left">
          <h1 className="font-bold text-4xl">AI Resume Builder</h1>
          <p className="text-gray-700">
            Create ATS-Optimized Resumes That Get Results <br />
            Build professional, ATS-friendly resumes that pass automated <br />
            screening and impress hiring managers. Our AI technology <br />
            creates personalized content based on your experience and <br />
            target job requirements.
          </p>
          <button className="btn btn-secondary rounded-full text-white my-3 flex items-center justify-center md:justify-start gap-2">
            Build your resume now <IoIosArrowDroprightCircle />
          </button>
        </div>
        <div className="relative mt-8 md:mt-0">
          <img className="absolute ml-60 mt-20 w-[45px]" src="/images/star.png" alt="" />
          <img src="/images/builder.png" alt="" />
          <img className="absolute -mt-48 w-[20px]" src="/images/star.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
