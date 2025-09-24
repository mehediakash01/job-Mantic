import React from "react";

const FrequentilyAsk = () => {
  return (
    <div className="w-11/12 max-w-5xl mx-auto my-20 text-center">
      <h1 className="text-5xl font-bold mb-8">
        Frequently <br /> Asked Questions
      </h1>

      <input
        type="text"
        placeholder="Search your questions"
        className="w-1/2 p-4 rounded-full border border-gray-300 mb-10 text-left shadow-md"
      />

      <div className="join join-vertical bg-base-100 text-left">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            Why should I use an AI Resume Editor?
          </div>
          <div className="collapse-content text-sm">
            Using an AI Resume Editor can help you in 3 major ways:
            <br />
            1. It significantly saves you time, allowing you to send more applications. On average, users save 2 hrs per job application.
            <br />
            2. It provides smart recommendations to optimize your resume and make it more competitive.
            <br />
            3. It can help you create a new ATS-friendly resume to grab recruiters’ attention, saving time and eliminating guesswork.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Why is Jobright's AI Resume Editor the best?
          </div>
          <div className="collapse-content text-sm">
            It creates professional, ATS-friendly resumes in minutes, tailors content to your experience and target job, and helps you stand out to hiring managers.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            I have a resume, just need some feedback. Is the AI Resume Editor relevant for me?
          </div>
          <div className="collapse-content text-sm">
            Absolutely! The AI Resume Editor can review your existing resume, suggest improvements, optimize it for ATS, and make your content more compelling for recruiters.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentilyAsk;
