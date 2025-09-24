import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Mentoring = () => {
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="flex items-center justify-center gap-6">
        <div className="space-y-4">
          <h1 className="font-bold text-4xl">Career Mentoring</h1>
          <p>
          Personalized Career Mentoring to position yourself <br /> strong in the Job market; Craft a job-winning resume <br /> and optimize your profile for maximum visibility. Step- <br /> by-step mentoring to align your skills, resume,
           and <br /> career path that helps you get interview and land on <br /> a Job with confidence.
          </p>
          <button className="btn btn-secondary rounded-full text-white my-3 flex items-center">
            {" "}
            Go Mentoring <IoIosArrowDroprightCircle />
          </button>
        </div>
        <img src="/images/mentor.png" alt="" />
      </div>
    </div>
  );
};

export default Mentoring;
