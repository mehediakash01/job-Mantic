import React from 'react';

const steps = [
  {
    id: 1,
    stepNumber: "1",
    icon: "/images/upload.png",
    title: "Upload or Import",
    description: "Start with existing resume, LinkedIn profile, or build from scratch.",
  },
  {
    id: 2,
    stepNumber: "2",
    icon: "/images/analysis.png",
    title: "AI Analysis",
    description: "Our system analyzes your background and identifies strengths.",
  },
  {
    id: 3,
    stepNumber: "3",
    icon: "/images/target.png",
    title: "Job Targeting",
    description: "Paste job descriptions for instant resume customization.",
  },
  {
    id: 4,
    stepNumber: "4",
    icon: "/images/enhance.png",
    title: "Content Enhancement",
    description: "AI improves bullet points, adds keywords, optimizes formatting.",
  },
  {
    id: 5,
    stepNumber: "5",
    icon: "/images/score.png",
    title: "ATS Scoring",
    description: "Real-time feedback ensures maximum compatibility.",
  },
  {
    id: 6,
    stepNumber: "6",
    icon: "/images/apply.png",
    title: "Export & Apply",
    description: "Download in multiple formats (PDF, DOCX, ATS-friendly).",
  },
];

const HowWork = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        How Our <span className="text-primary">AI Resume</span> Builder Works
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div
            className="bg-white shadow-sm rounded-lg p-5   max-w-sm mx-auto"
            key={step.id}
          >
            <div className="flex items-center justify-between mb-3">
              <h1 className="bg-[#23A2FC1A] text-primary font-bold rounded-full w-9 h-9 flex items-center justify-center text-sm">
                {step.stepNumber}
              </h1>
              <img src={step.icon} alt={step.title} className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-1">{step.title}</h2>
              <p className="text-gray-600 text-sm w-2/3">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWork;
