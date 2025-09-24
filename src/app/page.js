import Image from "next/image";
import Banner from "./components/Banner";
import Hired from "./components/Hired";
import WhyChoose from "./components/WhyChoose";
import JobMatching from "./components/JobMatching";
import Mentoring from "./components/Mentoring";

export default function Home() {
  return (
    <div className="bg-[#F9FBFF]" >
    <Banner></Banner>
    <Hired></Hired>
    <WhyChoose></WhyChoose>
    <JobMatching></JobMatching>
    <Mentoring></Mentoring>
    </div>
  );
}
