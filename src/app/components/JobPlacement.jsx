import React from 'react';

const JobPlacement = () => {
    return (
        <div className='w-11/12 mx-auto'>
               <div className=' '> <h1 className='font-bold text-4xl '>Comprehensive ai-powered <br /> job placement suite</h1> <img src="/images/line.png" alt="" /> </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-3'>
                <div className='bg-[#ECF7FF] rounded-lg space-y-2 p-4 text-center'>
                   <img className='w-fit mx-auto' src="/images/writter.png" alt="" />
                    <h1 className='font-bold text-2xl'>AI Resume writer</h1>
                    <p>Generate compelling bullet points, <br /> professional summaries, and <br /> achievement-focused content that <br /> showcases your expertise and <br /> captures employer attention.</p>
                </div>
                <div className='bg-[#ECF7FF] rounded-lg space-y-2 p-4 text-center'>
                   <img className='w-fit mx-auto' src="/images/keyword.png" alt="" />
                    <h1 className='font-bold text-2xl'>Keyword Optimization</h1>
                    <p>Automatically incorporate job-specific <br /> keywords without stuffing, ensuring <br /> your resume ranks high in ATS systems <br /> while maintaining natural readability.</p>
                </div>
                <div className='bg-[#ECF7FF] rounded-lg space-y-2 p-4 text-center'>
                   <img className='w-fit mx-auto' src="/images/AtsCheck.png" alt="" />
                    <h1 className='font-bold text-2xl'>ATS Checker</h1>
                    <p>Ensure 99% ATS compatibility with instant scoring and detailed feedback on format, keywords, and structure optimization.</p>
                </div>
                 <div className='bg-[#ECF7FF] rounded-lg space-y-2 p-4 text-center'>
                   <img className='w-fit mx-auto' src="/images/coverLetter .png" alt="" />
                    <h1 className='font-bold text-2xl'>Cover Letter Writer</h1>
                    <p>Create personalized cover letters that <br /> complement your tailored resume and <br /> tell your unique professional story <br /> effectively.</p>
                </div>
                  <div className='bg-[#ECF7FF] rounded-lg space-y-2 p-4 text-center'>
                   <img className='w-fit mx-auto' src="/images/jobTrack.png" alt="" />
                    <h1 className='font-bold text-2xl'>Job Application Tracker</h1>
                    <p>Organize applications, interviews, and <br /> follow-ups in one comprehensive <br /> dashboard with automated reminders <br /> and status updates.</p>
                </div>
                  <div className='bg-[#ECF7FF] rounded-lg space-y-2 p-4 text-center'>
                   <img className='w-fit mx-auto' src="/images/prepare.png" alt="" />
                    <h1 className='font-bold text-2xl'>Interview Preparation</h1>
                    <p>AI-powered practice sessions with <br /> role-specific questions, personalized <br /> feedback, and confidence-building <br /> exercises.s</p>
                </div>
            </div>
        </div>
    );
};

export default JobPlacement;