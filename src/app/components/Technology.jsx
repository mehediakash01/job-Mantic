import React from 'react';
import { TiTick } from 'react-icons/ti';

const Technology = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto my-20">
      {/* Section Header */}
    <div className=' '> <h1 className='font-bold text-4xl'>Revolutionary AI Resume <br /> Building Technology</h1> <img src="/images/line.png" alt="" /> </div>

      {/* 1. Smart Content Generation */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <div className="md:w-1/2 space-y-4">
          <h1 className="font-semibold text-3xl md:text-4xl">
            Smart Content Generation
          </h1>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              AI-powered bullet point writer creates achievement-focused descriptions
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              Automatic quantification of accomplishments with industry-specific metrics
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              Professional summary generator tailored to your career level and goals
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              Skills section optimization based on job market trends
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
           
            src="/images/brain.png"
            alt="Resume illustration"
          />
        </div>
      </div>

      {/* 2. ATS Optimization Engine */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 mb-20">
        <div className="md:w-1/2 flex justify-center">
          <img
            className=""
            src="/images/setting.png"
            alt="Resume illustration"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h1 className="font-semibold text-3xl md:text-4xl">
            ATS Optimization Engine
          </h1>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              Real-time ATS compatibility scoring (0-100 scale)
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              Keyword density analysis and optimization
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              Format checking for maximum readability by ATS systems
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              Industry-specific template recommendations
            </li>
          </ul>
        </div>
      </div>

      {/* 3. Multi-Version Resume Management */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-4">
          <h1 className="font-semibold text-3xl md:text-4xl">
            Multi-Version Resume Management
          </h1>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              Create unlimited resume variations for different job types
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              Master resume with all experience that branches into targeted versions
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              One-click customization for specific job applications
            </li>
            <li className="flex items-start gap-2">
              <TiTick className="text-primary mt-1" />
              Version history and comparison tools
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
           
            src="/images/check.png"
            alt="Resume illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
