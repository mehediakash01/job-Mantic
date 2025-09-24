import React from 'react';
import { TiTick } from 'react-icons/ti';
import Container from './Container';

const Technology = () => {
  return (
    <Container className="my-10 lg:my-20">
     
    <div> <h1 className='font-bold text-2xl lg:text-4xl'>Revolutionary AI Resume <br /> Building Technology</h1> <img src="/images/line.png" alt="" /> </div>

 
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
    </Container>
  );
};

export default Technology;
