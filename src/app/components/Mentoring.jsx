import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Container from "./Container";

const Mentoring = () => {
  return (
    <Container className=" my-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="space-y-4">
          <h1 className="font-bold text-2xl lg:text-4xl">Career Mentoring</h1>
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
    </Container>
  );
};

export default Mentoring;
