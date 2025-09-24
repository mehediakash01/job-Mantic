import Image from "next/image";
import Banner from "./components/Banner";
import Hired from "./components/Hired";
import WhyChoose from "./components/WhyChoose";
import JobMatching from "./components/JobMatching";
import Mentoring from "./components/Mentoring";
import Features from "./components/Features";
import ResumeBuilder from "./components/ResumeBuilder";
import FrequentilyAsk from "./components/FrequentilyAsk";
import Technology from "./components/Technology";
import HowWork from "./components/HowWork";
import JobSeeker from "./components/JobSeeker";
import JobPlacement from "./components/JobPlacement";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div className="bg-[#F9FBFF]" >
    <Banner></Banner>
    <Hired></Hired>
    <WhyChoose></WhyChoose>
    <JobMatching></JobMatching>
    <Mentoring></Mentoring>
    <Features></Features>
    <ResumeBuilder></ResumeBuilder>
    <Technology></Technology>
    <HowWork></HowWork>
    <JobSeeker></JobSeeker>
    <JobPlacement></JobPlacement>
    <Pricing></Pricing>
    <FrequentilyAsk></FrequentilyAsk>
    </div>
  );
}
