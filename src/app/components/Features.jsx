"use client";
import Image from "next/image";
import Container from "./Container";

const Features = () => {
  const features = [
    { img: "/images/resume.png", title: "Smart", desc: "Resume Tailoring" },
    { img: "/images/interview.png", title: "3X Higher", desc: "Interview Rate" },
    { img: "/images/match.png", title: "Lightning-Fast", desc: "Job Matching" },
    { img: "/images/ats.png", title: "ATS Score", desc: "Optimization" },
    { img: "/images/job.png", title: "Premium", desc: "Job Placement" },
    { img: "/images/mentoring.png", title: "Career", desc: "Mentoring" },
  ];

  return (
    <Container className="relative my-10 lg:my-20">
     
      <div className="hidden lg:block absolute inset-0">
        <Image
          src="/images/Union.png"
          alt="Cloud Background"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      <Container className="relative z-10 py-10 lg:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex justify-between items-end gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center py-4 transition
                ${i % 2 === 0 ? "translate-y-[10px] lg:translate-y-[20px]" : "translate-y-[-10px] lg:translate-y-[-20px]"}
              `}
            >
              <Image src={f.img} alt={f.title} width={50} height={50} />
              <h3 className="font-semibold text-lg mt-3">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Features;
