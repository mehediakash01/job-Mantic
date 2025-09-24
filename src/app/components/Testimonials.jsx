// components/Testimonials.js
import Image from "next/image";

const testimonials = [
  {
    text: "omg i cannot believe i am getting a interview after using this. the recommendations is well thought off. highly recommend everyone to use this website.",
    name: "Michelle V.",
    title: "Sr. Digital Marketing Manager",
    image: "/images/user.png",
  },
  {
    text: "The custom resume feature saved me so much time and effort. It made sure my resume matched the job descriptions perfectly. I am gonna use it for every job I apply.",
    name: "Shiva V.",
    title: "Instructional Designer",
    image: "/images/user (1).png",
  },
  {
    text: "Really easy to use and understand. I loved how I could take direct action on suggestions and not just learn about them.",
    name: "Ken D.",
    title: "Senior Recruiter",
    image: "/images/user (2).png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top mini testimonial */}
        <div className="mb-16 text-center max-w-lg mx-auto">
          <p className="text-gray-700 text-sm">
            AIApply transformed my job search! ... I started <br />
            getting 3x more interview invites within weeks.
          </p>
          <div className="flex justify-center items-center mt-3">
            <Image
              src="/images/user.png"
              alt="Sophie"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="ml-2 text-xs font-medium text-gray-600">
              Sophie C, Pro Customer
            </span>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-2xl font-bold">VOICE FROM THE WORLD</h2>
        <p className="text-gray-500 mt-2 mb-12">
          What our users say after using Jobmanttic and how it helped them <br />
          improve their Resume
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left side image cluster + names */}
          <div className="relative flex flex-col items-start">
            {/* floating clustered images */}
            <div className="relative w-40 h-40 mx-auto">
              {/* top-left */}
              <Image
                src="/images/user (1).png"
                alt="Top Left"
                width={40}
                height={40}
                className="rounded-lg absolute top-0 left-0"
              />
              {/* top-right */}
              <Image
                src="/images/user (2).png"
                alt="Top Right"
                width={40}
                height={40}
                className="rounded-lg absolute top-0 right-0"
              />
              {/* center big */}
              <Image
                src="/images/user.png"
                alt="Center"
                width={80}
                height={80}
                className="rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              {/* bottom-left */}
              <Image
                src="/images/user (2).png"
                alt="Bottom Left"
                width={40}
                height={40}
                className="rounded-lg absolute bottom-0 left-0"
              />
              {/* bottom-right */}
              <Image
                src="/images/user (1).png"
                alt="Bottom Right"
                width={40}
                height={40}
                className="rounded-lg absolute bottom-0 right-0"
              />
            </div>

            {/* name list */}
            <div className="mt-8 text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-semibold">Michelle V.</span> · Sr. Digital
                Marketing Manager
              </p>
              <p>
                <span className="font-semibold">Shiva V.</span> · Senior
                Recruiter
              </p>
              <p>
                <span className="font-semibold">Ken D.</span> · Instructional
                Designer
              </p>
              <p>
                <span className="font-semibold">Ken D.</span> · Senior Recruiter
              </p>
              <p>
                <span className="font-semibold">Ken D.</span> · Senior Recruiter
              </p>
            </div>
          </div>

          {/* Right side testimonials */}
          <div className="md:col-span-2 space-y-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${
                  idx === 1 ? "ml-8" : ""
                }`}
              >
                <div className="flex items-start mb-4">
                  {/* use quotes.png instead of “ ” */}
                  <Image
                    src="/images/quotes.png"
                    alt="Quote"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <p className="text-gray-700 italic">{item.text}</p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    <strong>{item.name}</strong> / {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load more */}
        <div className="mt-8 text-center">
          <button className="text-gray-600 hover:underline">Load more ↓</button>
        </div>
      </div>
    </section>
  );
}
